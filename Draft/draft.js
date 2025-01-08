document.getElementById("fileButton").addEventListener("click", () => {
    document.getElementById("fileInput").click();
  });
  
  document.getElementById("fileInput").addEventListener("change", (event) => {
    const fileInput = event.target;
    const fileList = document.getElementById("fileList");
    const fileTable = document.getElementById("fileTable");
  
    // Affiche la table (si elle est masquée initialement)
    fileTable.style.display = "block";
  
    // Parcourt les fichiers sélectionnés
    Array.from(fileInput.files).forEach((file) => {
      const fileRow = document.createElement("div");
      fileRow.classList.add("tr-ic");
  
      fileRow.innerHTML = `
        <div class="th th-check"><input type="checkbox" name="" id=""></div>
        <div class="th">
            <p class="p-file-select-ic">${file.name}</p>
        </div>
        <div class="select-ic th">
            <label class="label-select-ic">
                <div class="inpt-child-div">
                    <input type="text" id="status-input" class="inpt-child"
                        placeholder="Motivation" readonly>
                    <i class="arrow-idown">
                        <svg width="16" height="11" viewBox="0 0 16 11"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M6.98486 9.94878L0.344238 3.16835C-0.114746 2.69971 -0.114746 1.94189 0.344238 1.47823L1.44775 0.351485C1.90674 -0.117162 2.64893 -0.117162 3.10303 0.351485L7.81006 5.15761L12.5171 0.351485C12.9761 -0.117162 13.7183 -0.117162 14.1724 0.351485L15.2759 1.47823C15.7349 1.94688 15.7349 2.70469 15.2759 3.16835L8.63525 9.94878C8.18604 10.4174 7.44385 10.4174 6.98486 9.94878Z"
                                fill="#585856" />
                        </svg>
                    </i>
                    <div id="status-dropdown" class="dropdown hidden">
                        <div class="dropdown-item">Étudiant</div>
                        <div class="dropdown-item">Employé</div>
                        <div class="dropdown-item">Freelance</div>
                        <div class="dropdown-item">Chômeur</div>
                        <div class="dropdown-item">Retraité</div>
                    </div>
                </div>
            </label>
        </div>
        <div class="th-row th">
            <i class="icon-see"><svg width="30" height="30"
                    viewBox="0 0 30 30" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <!-- Icône SVG ici -->
                </svg>
            </i>
            <i class="icon-edit">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <!-- Icône SVG ici -->
                </svg>
            </i>
            <i class="icon-delete delete-file">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <!-- Icône SVG ici -->
                </svg>
            </i>
        </div>
      `;
  
      // Ajoute la nouvelle ligne à la liste des fichiers
      fileList.appendChild(fileRow);
    });
  
    // Réinitialise la valeur de l'input pour permettre la sélection des mêmes fichiers plusieurs fois
    fileInput.value = "";
  });
  