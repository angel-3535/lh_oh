$(document).ready(main());

let currentList = infoAS;

function main() {
  clean();
  renderTable(infoAS, '#content-list-AS');
  $('#AS-tab').on("click",() => {
    currentList = infoAS;
    renderTable(currentList, '#content-list-AS' );
  });
  $('#UA-tab').on("click",() => {
    currentList = infoUA;
    renderTable(currentList, '#content-list-UA');
  });
  $('#GA-tab').on("click",() => {
    currentList = infoGA;
    renderTable(currentList, '#content-list-GA');
  });
}


function clean() {
  $('#modal-container').html(``);
  $('#content-list-AS').html(``);
  $('#content-list-UA').html(``);
  $('#content-list-GA').html(``);
}

function renderTable(list,elementID){
  clean();
  let i = 0;
  // generate options
  list.forEach(element => {
    const AcademicDep = element.AcademicDep;
    const AppTypes = element.AppTypes;
    const Email = element.Email;
    const link = element.link;
    const notes = element.notes;
    const group = element.group;
    const modalID = "modalIdentifier-" + i;

    $(elementID).append(
      ` <a href="#" type="button" class="list-group-item list-group-item-action d-flex gap-3 py-3 " data-bs-toggle="modal"
      data-bs-target=" #${modalID}">
        <img src="img/book-icon.png" alt="" class="flex-shrink-0" width="32" height="32">
      <div class="d-flex gap-2 w-100 justify-content-between">${AcademicDep}</div>
      </a>`
    );

    $('#modal-container').append(
      `
      <div class="modal fade" id="${modalID}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body p-5">
              <h2 class="fw-bold mb-0">
                Contact Info:
              </h2>
              <ul class="d-grid gap-4 my-5 list-unstyled small">
                <li class="d-flex gap-4">
                  <img src="img/info.png" alt="" class="flex-shrink-0 bi text-body-secondary flex-shrink-0" width="32"
                    height="32">
                    <div>
                      <h5>Appointment Types</h5>
                      <div>${AppTypes}</div>
                    </div>
                </li>
                <li class="d-flex gap-4">
                  <img src="img/mail.png" alt="" class="flex-shrink-0" width="32" height="32">
                    <div>
                      <h5>E-mail</h5>
                      <div>${Email}</div>
                    </div>
                </li>
                <li class="d-flex gap-4">
                  <img src="img/link.png" alt="" class="flex-shrink-0" width="32" height="32">
                    <div>
                      <h5>Advising Link</h5>
                      <a href="${link}">${link}</a>
                    </div>
                </li>
                <li class="d-flex gap-4">
                  <img src="img/comment.png" alt="" class="flex-shrink-0" width="32" height="32">
                    <div>
                      <h5>Notes</h5>
                      <div>${notes}</div>
                    </div>
                </li>
              </ul>
              <button type="button" class="btn btn-lg btn-primary mt-5 w-100" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      `
    );


  });
}



