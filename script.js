


const infoArray = [
  {
    AcademicDep: 'ABC BS (Interdepartmental Concentration in Anthropology, Biology, & Chemistry)',
    AppTypes: 'Zoom, Email, Phone',
    Email: 'victoria.dominguez@lehman.cuny.edu',
    link: 'http://www.lehman.edu/academics/anthropology',
    notes: '',
    group: 'UndAdv'
  },
  {
    AcademicDep: 'Africana Studies',
    AppTypes: 'Email, Phone, Blackboard, Zoom',
    Email: 'africana.studies@lehman.cuny.edu',
    link: 'https://www.lehman.edu/academics/arts-humanities/africana-studies/advising/',
    notes: '',
    group: 'UndAdv'
  },
  {
    AcademicDep: 'Anthropology BA, Anthropology Minor, and Human Rights & Peace Studies Minor',
    AppTypes: 'Zoom, Email, Phone',
    Email: 'anthony.dest@lehman.cuny.edu',
    link: 'http://www.lehman.edu/academics/anthropology',
    notes: '',
    group: 'UndAdv'
  },
  {
    AcademicDep: 'Art',
    AppTypes: 'Email, Virtual Phone',
    Email: '',
    link: 'https://www.lehman.edu/academics/arts-humanities/art/advising/',
    notes: 'Follow link for instructions',
    group: 'UndAdv'
  },

];


$(document).ready(main());



function clean() {
  $('#modal-container').html(``);
  $('#content-list').html(``);
}

function main() {
  clean();
  let i = 0;
  // generate options
  infoArray.forEach(element => {
    const AcademicDep = element.AcademicDep;
    const AppTypes = element.AppTypes;
    const Email = element.Email;
    const link = element.link;
    const notes = element.notes;
    const group = element.group;
    const modalID = "modalIdentifier-" + i;

    console.log("generating div for : " + AcademicDep);

    $('#content-list').append(
      ` <a href="#" type="button" class="list-group-item list-group-item-action d-flex gap-3 py-3 " data-bs-toggle="modal"
      data-bs-target=" #${modalID}">
        <img src="img/book-icon.png" alt="" class="flex-shrink-0" width="32" height="32">
      <div class="d-flex gap-2 w-100 justify-content-between">${AcademicDep}</div>
      </a>`
    );


    i++;
  });

  i = 0;
  // generate modals
  infoArray.forEach(element => {
    const AcademicDep = element.AcademicDep;
    const AppTypes = element.AppTypes;
    const Email = element.Email;
    const link = element.link;
    const notes =  element.notes === '' ? "No notes provided": element.notes;
    const group = element.group;
    const modalID = "modalIdentifier-" + i;

    console.log("generating div for : " + AcademicDep);

    $('#content-list').append(
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


    i++;
  });
}
