let form = document.getElementById("myform");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const dateofbirth = document.getElementById("date of birth").value;
  const address1 = document.getElementById("address1").value;
  const address2 = document.getElementById("address2").value;
  const city = document.getElementById("city").value;
  const email = document.getElementById("email").value;
  const bussiname = document.getElementById("bussinessname").value;
  const fathersname = document.getElementById("fathersname").value;
  const mothersname = document.getElementById("mothersname").value;
  const fullname = document.getElementById("fullname").value;
  const signature = document.getElementById("signature").value;
  document.getElementById("myone").innerHTML = displaymessage(
    name,
    dateofbirth,
    address1,
    address2,
    city,
    email,
    bussiname,
    fathersname,
    mothersname,
    fullname,
    signature
  );

  if (
    name &&
    dateofbirth &&
    address1 &&
    address2 &&
    city &&
    email &&
    bussiname &&
    fathersname &&
    mothersname &&
    fullname &&
    signature
  ) {
    displaymessage(
     'success', "user registered: \nname: ${name}\ndateofbirth: ${dateofbirth}\naddress1: ${address1}\naddress2: ${address2}\ncity: ${city}\nemail: ${email}\nbussinessname: ${bussinessname}\nfathersname: ${fathersname}\nmothersname: ${mothersname}\nfullname: ${fullname}\nsignature: ${signature}"
    );
  } else {
    displaymessage('error',"please fill in all fields.");
  }
}
);

function displaymessage(type,message){
  const messageelement = document.getElementById("message");
  messageelement.textContent=message;
  messageelement.style.display='block';

  if (type==='success'){
    messageelement.style.backgroundColor='#4acaf50';
  }else if (type==='error'){
    messageelement.style.backgroundColor='#f44336';
  }

  setTimeout(()=> {
    messageelement.style.display='none';
  }, 3000);
}