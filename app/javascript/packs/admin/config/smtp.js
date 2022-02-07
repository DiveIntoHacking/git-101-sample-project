document
  .getElementById('settings_smtp_own_email_server')
  ?.addEventListener('change', (event) => {
    const customSMTPSection = document.getElementsByClassName(
      'js-custom-smtp-section',
    )[0];

    if (event.target.checked) {
      customSMTPSection.classList.remove('hidden');
    } else {
      // when the user indicates that they do not want to use their own server
      // we clear the form values except for those fields that have a default value.
      const inputs = customSMTPSection.getElementsByTagName('input');
      const haveDefaultValues = ['authentication'];

      for (let i = 0; i < inputs.length; i++) {
        if (!haveDefaultValues.some((el) => inputs.item(i).name.includes(el))) {
          inputs.item(i).value = '';
        }
      }
      customSMTPSection.classList.add('hidden');
    }
  });

