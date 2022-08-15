const form = document.querySelector('#form-response');
const validationResponseUs = new JustValidate('#form-response');

validationResponseUs
  .addField('#form-response__vacancy', [
    {
      rule: 'required',
      errorMessage: 'Название не введено',
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Название слишком маленькое',
    },
    {
      rule: 'maxLength',
      value: 50,
      errorMessage: 'Название слишком большое',
    },
  ])
  .addField('#form-response__full-name', [
    {
      rule: 'required',
      errorMessage: 'ФИО не введено',
    },
    {
      rule: 'customRegexp',
      value: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
      errorMessage: 'Введите фамилию, имя и отчество через пробел (Например: Иванов Петр Алексеевич)',
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'ФИО слишком маленькое',
    },
    {
      rule: 'maxLength',
      value: 50,
      errorMessage: 'ФИО слишком большое',
    },
  ])
  .addField('#form-response__tel', [
    {
      rule: 'required',
      errorMessage: 'Телефон не введен',
    },
    {
      rule: 'minLength',
      value: 11,
      errorMessage: 'Телефон введен некорректно',
    },
  ])
  .addField('#form-response__email', [
    {
      rule: 'required',
      errorMessage: 'Телефон не введен',
    },
    {
      rule: 'email',
      errorMessage: 'E-mail введен некорректно',
    },
  ])
  .addField('#form-response__education', [
    {
      rule: 'required',
      errorMessage: 'Название не введено',
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Название слишком маленькое',
    }
  ])
  .addField('#form-response__address', [
    {
      rule: 'required',
      errorMessage: 'Адрес не введен',
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Адрес слишком маленький',
    }
  ])
  .addField('#form-response__birth-date', [
    {
      rule: 'required',
      errorMessage: 'Дата рождения не введена',
    }
  ])
  .onSuccess(() => {
    tlModal.reverse(1);
    document.querySelector('.modal-response').style.display = 'none';
    document.querySelector('.modal-shanks').style.display = 'block';
    tlModal.play();
  });;


form.querySelectorAll('input').forEach(el => {
  if (el.type !== 'checkbox' && el.type !== 'file' && el.type !== 'date') {
    const placeholder = el.parentElement.querySelector('.placeholder').classList;
    if (el.value !== '') {
      placeholder.add('placeholder--min');
    } else {
      placeholder.remove('placeholder--min');
    }
    el.addEventListener('input', (ev) => {
      if (ev.target.value !== '') {
        placeholder.add('placeholder--min');
      } else {
        placeholder.remove('placeholder--min');
      }
    })
  }
});

const inputData = document.querySelector('input[type="date"]');
inputData.addEventListener('input', () => {
  if (inputData.value !== '') {
    inputData.classList.add('has-value');
  } else {
    inputData.classList.remove('has-value');
  }
})

const inputFile = document.querySelector('input[type="file"]');
function deleteFile() {
  const btnDel = document.querySelector('.file__del');
  btnDel.addEventListener('click', () => {
    inputFile.parentElement.querySelector('.file__name').innerText = 'Загрузить резюме';
    inputFile.value = null;
    btnDel.style.display = 'none';
  })
}
function nameWithDots(val) {
  const valArr = val.split('.');
  val = valArr[0].slice(0, 19) + '...' + valArr[valArr.length - 1];
  return val;
}
inputFile.addEventListener('change', () => {
  const label = inputFile.parentElement;
  const value = inputFile.files.item(0).name;
  const name = value.length > 19 ? nameWithDots(value) : value;
  label.querySelector('.file__name').innerText = name;
  label.querySelector('.file__name').style.color = "var(--dark)";
  label.querySelector('.file__del').style.display = 'inline';
  deleteFile();
})
const btnSubmit = document.querySelector('.form-response__submit');
btnSubmit.disabled = true;
const checkboxPrivacy = document.getElementById('form-response__privacy-policy');
checkboxPrivacy.addEventListener('change', () => {
  if(checkboxPrivacy.checked === true) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
})
