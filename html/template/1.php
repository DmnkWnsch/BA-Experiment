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
          möchten wir Ihnen Funktionen für die Social-Media Verbindung stellen.
          Für diese Zwecke setzen wir sogenannte Cookies ein. Sie können selbst
          bestimmen, für welche dieser Cookies Sie Ihre Einwilligung erteilen.
          Mehr Details über unsere gesetzten Cookies erfahren sie in unserer
          Datenschutzerklärung und in den folgenden Cookie-Einstellungen. Sie
          können Ihre Einwilligung auch jederzeit widerrufen.
        </p>

        <form method="POST" action="<?php $_SERVER['PHP_SELF']; ?>">
          <input type="text" name="id" value="1" hidden />
          <input id="tL" type="number" name="tL" value="0" hidden />
          <div class="form-check form-check-inline">
            <input
              type="checkbox"
              class="form-check-input"
              id="required"
              name="required"
              value="1"
              checked
              disabled
            />
            <label for="required" class="form-check-label">Notwendig</label>
          </div>

          <div class="form-check form-check-inline">
            <input
              type="checkbox"
              class="form-check-input"
              id="statistics"
              name="statistics"
              value="1"
            />
            <label for="statistics" class="form-check-label">Statistiken</label>
          </div>

          <div class="form-check form-check-inline">
            <input
              type="checkbox"
              class="form-check-input"
              id="marketing"
              name="marketing"
              value="1"
            />
            <label for="marketing" class="form-check-label">Marketing</label>
          </div>

          <div class="form-check form-check-inline">
            <input
              type="checkbox"
              class="form-check-input"
              id="external_media"
              name="external_media"
              value="1"
            />
            <label for="external_media" class="form-check-label"
              >Externe Medien</label
            >
          </div>

          <div class="row text-center pt-3">
            <div class="col px-1">
              <button
                style="width: 100%"
                type="submit"
                class="btn btn-primary btn-sm"
                name="only_required"
              >
                Nur notwendige
              </button>
            </div>
            <div class="col ps-1">
              <button
                style="width: 100%"
                type="submit"
                class="btn btn-primary btn-sm"
                name="save"
              >
                Auswahl speichern
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</div>
