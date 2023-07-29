import React, { useState } from "react";
import CryptoJS from "crypto-js";
import moment from "moment";

function Formulario() {
  let m = new Date();
  const [txndatetime, setTxndatetime] = useState(m);

  let chargetotal = "13.00";
  let currency = "978";
  let paymentMethod = "M";
  let responseFailURL = "https://mywebshop/response_failure.jsp";
  let responseSuccessURL = "https://mywebshop/response_success.jsp";
  let sharedsecret = "1Wr5fww2rvDOpAG17PPs1AjsnvHB7tOtfh4a3cSdcLl";
  let storename = "10123456789";
  let timezone = "America";
  let transactionNotificationURL = "https://mywebshop/transactionNotification";
  let txntype = "sale";
  let stringToExtendedHash = `${chargetotal}|${currency}|${paymentMethod}|${responseFailURL}|${responseSuccessURL}|${storename}|${timezone}|${transactionNotificationURL}|${txndatetime}|${txntype}`;

  var hashExtended = CryptoJS.HmacSHA256(stringToExtendedHash, sharedsecret);
  var extendedhash = CryptoJS.enc.Base64.stringify(hashExtended);

  console.log(moment().format("YYYY:MM:DD-hh:mm:ss"));

  return (
    <>
      <div></div>
      <form
        method="post"
        action="https://test.ipg-online.com/connect/gateway/processing"
      >
        <input type="text" name="txntype" value="preauth" />
        <input type="text" name="timezone" value={timezone} />
        <input
          type="text"
          name="txndatetime"
          value={moment().format("YYYY:MM:DD-hh:mm:ss")}
        />
        <input type="text" name="hash_algorithm" value="HMACSHA256" />
        <input type="text" name="hashExtended" value={extendedhash} />
        <input type="text" name="storename" value="10123456789" />
        <input type="text" name="chargetotal" value="13.00" />
        <input type="text" name="currency" value="978" />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default Formulario;
