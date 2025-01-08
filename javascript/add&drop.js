const dropZone = document.getElementById('dropZone');
const fileInput = document.getElementById('fileInput');


dropZone.addEventListener('dragover', (event) => {
  event.preventDefault();
  dropZone.style.backgroundColor = "#f2f2f2";
});

dropZone.addEventListener('dragleave', () => {
  dropZone.style.backgroundColor = "white";
});


dropZone.addEventListener('drop', (event) => {
  event.preventDefault();
  dropZone.style.backgroundColor = "white";
  handleFiles(event.dataTransfer);
});

function handleFiles(input) {
  const files = input.files || input.target.files;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    alert(file.name);

  }



}