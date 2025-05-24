onload = () => {
  document.body.classList.remove("container");
 const audio = document.getElementById("linkmp3");

    window.addEventListener("load", function () {
      audio.play().then(() => {
        console.log("✅ Audio berhasil diputar saat load");
      }).catch((e) => {
        console.warn("⚠️ Autoplay dicegah, menunggu interaksi pengguna...");
      });
    });

    function aktifkanAudio() {
      audio.play().then(() => {
        console.log("✅ Audio diputar setelah interaksi pengguna");
      }).catch((e) => {
        console.error("❌ Gagal memutar audio:", e);
      });

      document.removeEventListener("click", aktifkanAudio);
      document.removeEventListener("mousemove", aktifkanAudio);
      document.removeEventListener("keydown", aktifkanAudio);
      document.removeEventListener("touchstart", aktifkanAudio);
    }

    document.addEventListener("click", aktifkanAudio);
    document.addEventListener("mousemove", aktifkanAudio);
    document.addEventListener("keydown", aktifkanAudio);
    document.addEventListener("touchstart", aktifkanAudio);
};
