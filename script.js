const downloadBtn = document.getElementById("download");
const qrImage = document.getElementById("qrImage");
const loadingText = document.getElementById("loadingText");

downloadBtn.style.display = "none";
loadingText.style.display = "none";

downloadBtn.addEventListener("click", async () => {
    const response = await fetch(qrImage.src);
    const blob = await response.blob();
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = "qrcode.jpg";
    downloadLink.click();
});

let imgBox = document.getElementById("imgBox");
let qrText = document.getElementById("qrText");

function generateQR() {
    if (qrText.value.length > 0) {
        loadingText.style.display = "block";
        setTimeout(() => {
            qrImage.src =
                "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
                encodeURIComponent(qrText.value);
            imgBox.classList.add("show-image");
            downloadBtn.style.display = "block";
            loadingText.style.display = "none";
        }, 2000);
    } else {
        qrText.classList.add("error");
        setTimeout(() => {
            qrText.classList.remove("error");
        }, 1000);
        downloadBtn.style.display = "none";
    }
}
