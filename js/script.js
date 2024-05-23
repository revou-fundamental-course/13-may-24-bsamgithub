// file js

function validateForm() {
    var x = document.forms["myForm"]["alas"].value;
    if (x == "") {
      alert("Form tidak boleh kosong");
      return false;
    }
  }

function hitungluas() {
    let alas= document.getElementById("alas").value;
    let tinggi= document.getElementById("tinggi").value;
    let luas= 0.5*alas*tinggi;
    document.getElementById("luas").value=luas;   
    
    let hasilperhitungan = document.getElementById("hasilperhitungan");
    hasilperhitungan.innerHTML = 
        `<p>L = 1/2 x a x t</p>
        <p>L = 1/2 x ${alas} x ${tinggi}</p>
        <p>L = ${luas}</p>`;
}

function resetluas() {
    document.getElementById("alas").value = '';
    document.getElementById("tinggi").value = '';
    document.getElementById("luas").value = '';
    document.getElementById("hasilperhitungan").innerHTML = '';
}

function hitungkeliling() {
    let S1= document.getElementById("S1").value;
    let S2= document.getElementById("S2").value;
    let S3= document.getElementById("S3").value;
    let keliling= parseInt(S1) + parseInt(S2) + parseInt(S3);
    document.getElementById("keliling").value=keliling;   
    
    let hasilkeliling = document.getElementById("hasilkeliling");
    hasilkeliling.innerHTML = 
        `<p>K = S1 + S2 + S3</p>
        <p>K = ${S1} + ${S2} + ${S3}</p>
        <p>K = ${keliling}</p>`;
}

function resetkeliling() {
    document.getElementById("S1").value = '';
    document.getElementById("S2").value = '';
    document.getElementById("S3").value = '';
    document.getElementById("keliling").value = '';
    document.getElementById("hasilkeliling").innerHTML = '';
}

// Alert Function
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }
