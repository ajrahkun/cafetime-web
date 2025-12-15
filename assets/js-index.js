const modal = document.getElementById('buyModal')
const closeModal = document.getElementById('closeModal')
const confirmBuy = document.getElementById('confirmBuy')

const modalTitle = document.getElementById('modalTitle')
const modalDesc = document.getElementById('modalDesc')

const accountOptions = document.getElementById('accountOptions')
const option1Title = document.getElementById('option1Title')
const option1Desc = document.getElementById('option1Desc')
const option2Title = document.getElementById('option2Title')
const option2Desc = document.getElementById('option2Desc')

let currentApp = null

document.querySelectorAll('.btn-buy').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault()

    currentApp = btn.dataset.app

    modalTitle.innerText = 'Konfirmasi Pembelian'

    if (currentApp === 'alight') {
      modalDesc.innerText = 'Kamu akan membeli Alight Motion :'

      option1Title.innerText = 'Private - Rp 20.000 - 1 Tahun'
      option1Desc.innerText = 'Menggunakan akun kamu sendiri.'

      option2Title.innerText = 'Sharing - Rp 10.000 - 1 Tahun'
      option2Desc.innerText = 'Menggunakan akun dari admin.'

      accountOptions.style.display = 'flex'
      document.querySelector('input[value="option1"]').checked = true
    }

    if (currentApp === 'capcut') {
      modalDesc.innerText = 'Kamu akan membeli CapCut Pro :'

      option1Title.innerText = 'Sharing - Rp 20.000 - 30 Hari'
      option1Desc.innerText = 'Akun dari admin dengan masa 30 hari.'

      option2Title.innerText = 'Sharing - Rp 10.000 - 7 Hari'
      option2Desc.innerText = 'Akun dari admin dengan masa 7 hari.'

      accountOptions.style.display = 'flex'
      document.querySelector('input[value="option1"]').checked = true
    }

    modal.classList.add('show')
    document.body.classList.add('modal-open')
  })
})

closeModal.addEventListener('click', () => {
  modal.classList.remove('show')
  document.body.classList.remove('modal-open')
  currentApp = null
})

confirmBuy.addEventListener('click', () => {
  const selected = document.querySelector('input[name="accountType"]:checked')?.value
  modal.classList.remove('show')
  document.body.classList.remove('modal-open')

  if (!selected) return

  if (currentApp === 'alight') {
    if (selected === 'option1') {
      window.location.href = 'https://api.whatsapp.com/send/?phone=6285353127195&text=kak%2C+mau+order+am+prem+private&type=phone_number&app_absent=0'
    } else {
      window.location.href = 'https://api.whatsapp.com/send/?phone=6285353127195&text=kak%2C+mau+order+am+prem+sharing&type=phone_number&app_absent=0'
    }
  }

  if (currentApp === 'capcut') {
    if (selected === 'option1') {
      window.location.href = 'https://api.whatsapp.com/send/?phone=6285353127195&text=kak%2C+mau+order+cc+pro+30+hari&type=phone_number&app_absent=0'
    } else {
      window.location.href = 'https://api.whatsapp.com/send/?phone=6285353127195&text=kak%2C+mau+order+cc+pro+7+hari&type=phone_number&app_absent=0'
    }
  }
})

const stockModal = document.getElementById('stockModal')
const openStock = document.getElementById('openStock')
const closeStock = document.getElementById('closeStock')

if (openStock && stockModal) {
  openStock.addEventListener('click', () => {
    stockModal.classList.add('show')
    document.body.classList.add('modal-open')
  })
}

if (closeStock) {
  closeStock.addEventListener('click', () => {
    stockModal.classList.remove('show')
    document.body.classList.remove('modal-open')
  })
}