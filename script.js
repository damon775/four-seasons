document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("quoteForm");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // يمنع التحويل لصفحة Formspree

    const formData = new FormData(form);

    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" }
      });

      if (res.ok) {
        window.location.href = "/thanks.html"; // يوديك لصفحتك أنت
      } else {
        alert("لم يتم إرسال الطلب. تأكد من البيانات وحاول مرة ثانية.");
      }
    } catch (err) {
      alert("فيه مشكلة اتصال. حاول مرة ثانية.");
    }
  });
});
