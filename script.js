 let sending = false;

        emailjs.init("rphTcvrKAeEA_yG9u");

        const form = document.getElementById('contato');
        const submitButton = form.querySelector('button[type="submit"]');

        form.addEventListener('submit', function (e) {
            e.preventDefault();

            if (sending) return;
            sending = true;

            submitButton.textContent = "Enviando...";
            submitButton.disabled = true;

            const formData = {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                subject: document.getElementById("subject").value,
                message: document.getElementById("message").value
            };

            emailjs.send("service_vgopuxd", "template_hpd51nb", formData)
                .then(() => {
                    Toastify({
                        text: "E-mail enviado com sucesso!",
                        style: {
                            background: "#28a745",
                            color: "#f4f4f4"
                        },
                    }).showToast();

                    form.reset();
                })
                .catch(() => {
                    Toastify({
                        text: "Erro ao enviar email!",
                        style: {
                            background: "#dc3545",
                            color: "#f4f4f4"
                        },
                    }).showToast();
                })
                .finally(() => {
                    sending = false;
                    submitButton.disabled = false;
                    submitButton.textContent = "Enviar mensagem";
                });
        });
