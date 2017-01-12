import yo from 'yo-yo';

// get nav
import campaignContributeNav from './campaignContributeNav';

// export method
module.exports = campaignContributeWallet;

// main export
function campaignContributeWallet(options) {
  const t = options.t;
  const campaignObject = options.campaignObject;
  const defaultAccount = options.defaultAccount;

  return yo`<div>
    <div id="view-campaign-contribute-wallet-balance" class="row center-block container"
      style=" display: none; margin-top: 40px;">

      <h2>YOUR LIGHTWALLET</h2>

      <br />
      <br />

      <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-4">
          <canvas id="campaign-contribute-qrcode" style="border: 3px solid #333; padding: 20px;">
          </canvas>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-8">
          <h2 class="text-break-all">
            <label>Address</label><br />
            <span class="user-address">0x0</span>
          </h2>

          <hr />

          <h4>This is the QR code for your wallet address.</h4>

          <h4>Please fill your account with Ether, so you can contribute to the campaign.</h4>

          <br />

          <div class="row">
            <div class="col-sm-6">
              <h4 style="margin-top: 0px;"><b>Balance</b></h4>
              <h3 style="margin-top: 0px;"><span class="account-balance">0</span> ether</h3>
            </div>
            <div class="col-sm-6"><br />
              <a href="/campaign/${campaignObject.id}/contribute/form" disabled
                class="contribute btn btn-primary">CONTRIBUTE TO CAMPAIGN</a>
            </div>
          </div>

        </div>
      </div>
      ${campaignContributeNav({
        backURL: `/campaign/${campaignObject.id}/contribute/wallet`,
        showNextButton: false,
      })}
    </div>

    <div id="view-campaign-contribute-wallet-download" class="row center-block container"
      style=" display: none; margin-top: 40px;">

      <h2>YOUR LIGHTWALLET</h2>

      <br />
      <br />

      <p>We recommend you save a backup of your wallet on your local computer.</p>

      <br />

      <a href="/campaign/${campaignObject.id}/contribute/wallet/balance" class="btn btn-primary">
        DOWNLOAD ENCRYPTED WALLET
      </a>

      <a href="/campaign/${campaignObject.id}/contribute/wallet/balance" class="btn btn-primary">
        NO, THANKS
      </a>

    </div>

    <div id="view-campaign-contribute-wallet-password" class="row center-block container"
      style=" display: none; margin-top: 40px;">

      <h2>YOUR LIGHTWALLET</h2>

      <br />
      <br />

      <h4>Your seed phrase is:</h4>

      <div class="alert alert-warning text-center">
        <h3 class="seed" style="margin-top: 0px; margin-bottom: 0px;">Loading...</h3>
      </div>

      <h4>
        <b>WRITE DOWN YOUR SEED PHRASE.</b>
        WeiFund does not store your wallet. Your seed phrase is required to
        access your assets.
      </h4>

      <br />

      <h4>
        This lightwallet is still in beta and is presently not recommended for the storage of large amounts of ETH.
      </h4>

      <br /><br />

      <a href="/campaign/${campaignObject.id}/contribute/wallet/confirm" class="btn btn-primary">
        I WROTE IT DOWN
      </a>

      ${campaignContributeNav({
        backURL: `/campaign/${campaignObject.id}/contribute/wallet`,
        showNextButton: false,
      })}
    </div>

    <div id="view-campaign-contribute-wallet-entropy" class="row center-block container"
      style=" display: none; margin-top: 40px;">

      <h2>YOUR LIGHTWALLET</h2>

      <br />
      <br />

      <h4>Move your mouse randomly to generate your new wallet.</h4>

      <br />


      <a href="/campaign/${campaignObject.id}/contribute/wallet/password">
        <div style="width: 100%; height: 15px; background: #F1F1F1;">
          <div class="progress" style="width: 0; height: 15px; background: #ff7518"></div>
        </div>
      </a>

      ${campaignContributeNav({
        backURL: `/campaign/${campaignObject.id}/contribute/wallet`,
        showNextButton: false,
      })}
    </div>

    <div id="view-campaign-contribute-wallet-confirm" class="row center-block container"
      style=" display: none; margin-top: 40px;">

      <h2>YOUR LIGHTWALLET</h2>

      <br />
      <br />

      <p>Please re-enter your wallet seed to verify that your backup is correct.</p>

      <br />

      <input type="text" class="form-control" placeholder="WALLET SEED PHRASE" />

      <br />

      <a disabled href="/campaign/${campaignObject.id}/contribute/wallet/balance" class="confirm btn btn-primary">
        CONFIRM SEED PHRASE
      </a>

      ${campaignContributeNav({
        backURL: `/campaign/${campaignObject.id}/contribute/wallet`,
        showNextButton: false,
      })}
    </div>

    <div id="view-campaign-contribute-wallet-restore" class="row center-block container"
      style=" display: none; margin-top: 40px;">

      <h2>YOUR LIGHTWALLET</h2>

      <br />
      <br />

      <input type="text" class="form-control" placeholder="WALLET SEED PHRASE" />

      <br />

      <a class="restore btn btn-primary">RESTORE FROM SEED</a>

      ${campaignContributeNav({
        backURL: `/campaign/${campaignObject.id}/contribute/wallet`,
        showNextButton: false,
      })}
    </div>

    <div id="view-campaign-contribute-wallet" class="row center-block container"
        style="margin-top: 40px; display: none;">

      <h2>YOUR LIGHTWALLET</h2>

      <br />
      <br />

      <h4>
        <b>DISCLAIMER</b>
        This lightwallet is still in beta and is presently not recommended for
        the storage of large amounts of ETH.
      </h4>

      <br />

      <h4>
        You can create a new Ethereum wallet to contribute to a campaign or use
        an existing wallet if you already have one.
      </h4>

      <br /><br />

      <div>
        <a href="/campaign/${campaignObject.id}/contribute/wallet/entropy" class="generate btn btn-primary">
          NEW WALLET
        </a>
        <a href="/campaign/${campaignObject.id}/contribute/wallet/restore" class="btn btn-primary">
          EXISING WALLET
        </a>
      </div>

      ${campaignContributeNav({
        backURL: `/campaign/${campaignObject.id}`,
        showNextButton: false,
      })}
    </div></div>`;
}