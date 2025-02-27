let daduSatu = document.getElementById("daduSatu");
let daduDua = document.getElementById("daduDua");
let totalDadu = document.getElementById("totalDadu");

const kocokSatu = () => {
  const randomSatu = parseInt(~~(Math.random() * 6) + 1);
  return randomSatu;
};

const kocokDua = () => {
  const randomDua = parseInt(~~(Math.random() * 6) + 1);
  return randomDua;
};

const getDaduSatu = () => {
  const ambilDadu = kocokSatu();
  daduSatu.value = ambilDadu;
  // alert("dadu Satu sudah dikocok");
};
const getDaduDua = () => {
  const ambilDadu = kocokDua();
  daduDua.value = ambilDadu;
  //   alert("dadu Dua sudah dikocok");
};

const hasilDadu = () => {
  totalDadu.value = parseInt(daduSatu.value) + parseInt(daduDua.value);

  if (parseInt(totalDadu.value) === 12) {
    alert(`anda berasil mendapatkan dadu 12`);
  }
};
