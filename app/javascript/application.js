// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

document.addEventListener("turbo:load", () => {
  tinymce.remove();

  tinymce.init({
    selector: '.tinymce',
    language: 'ja',
    plugins: 'link image lists code table',
    toolbar: 'undo redo | bold italic underline | bullist numlist | link image | table | code',
    menubar: false,
    branding: false,
    height: 300,
    
    images_upload_url: '/tinymce_assets',

    images_upload_handler: function (blobInfo) {
      return new Promise(function (resolve, reject) {
        const csrfToken = document
          .querySelector("meta[name='csrf-token']")
          .getAttribute("content");
          
        const formData = new FormData();
        formData.append('file', blobInfo.blob());
        
        fetch('/tinymce_assets', {
          method: 'POST',
          headers: { 'X-CSRF-Token': csrfToken },
          body: formData
        })
          .then(response => response.json())
          .then(json => resolve(json.location))
          .catch(() => reject("アップロードに失敗しました"));
        });
      }
    });
  });