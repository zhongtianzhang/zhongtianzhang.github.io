document.addEventListener("DOMContentLoaded", function () {
  const shareLink = document.getElementById("share-link");
  if (!shareLink) return;

  shareLink.addEventListener("click", async function (e) {
    e.preventDefault();

    try {
      if (navigator.share) {
        await navigator.share({
          title: document.title,
          url: window.location.href
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);

        const original = shareLink.innerHTML;
        shareLink.innerHTML =
          '<i class="fas fa-check" aria-hidden="true"></i> Copied!';
        setTimeout(() => {
          shareLink.innerHTML = original;
        }, 2000);
      }
    } catch (err) {
      console.error(err);
    }
  });
});
