<div class="container">
  <div
    class="modal fade"
    id="experimentModal"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header text-bg-light">
          <h5 class="modal-title">Diese Website verwendet Cookies!</h5>
        </div>
        <div class="modal-body">
          <p>
            Wir möchten unsere Inhalte auf der Website an Ihre Bedürfnisse
            anpassen und durch Website-Analysen stetig verbessern. Des weiteren
            möchten wir Ihnen Funktionen für die Social-Media Verbindung
            stellen. Für diese Zwecke setzen wir sogenannte Cookies ein. Sie
            können selbst bestimmen, für welche dieser Cookies Sie Ihre
            Einwilligung erteilen. Mehr Details über unsere gesetzten Cookies
            erfahren sie in unserer Datenschutzerklärung und in den folgenden
            Cookie-Einstellungen. Sie können Ihre Einwilligung auch jederzeit
            widerrufen.
          </p>

          <form method="POST" action="<?php $_SERVER['PHP_SELF']; ?>">
            <input type="text" name="id" value="4" hidden />
            <input id="tL" type="number" name="tL" value="0" hidden />
            <div class="row text-center justify-content-end">
              <div class="col-4 pe-1">
                <button
                  style="width: 100%"
                  type="submit"
                  class="btn btn-outline-secondary btn-sm"
                  name="decline_all"
                >
                  Alle ablehnen
                </button>
              </div>
              <div class="col-4 ps-1">
                <button
                  style="width: 100%"
                  type="submit"
                  class="btn btn-primary btn-sm"
                  name="accept_all"
                >
                  Alle annehmen
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
