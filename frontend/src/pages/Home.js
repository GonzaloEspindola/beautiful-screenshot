import React, { useState } from 'react'
import { saveAs } from 'file-saver'
import LoaderGif from '../images/Loading.gif'

function Home () {
  function FetchApi (url) {
    setLoader(true)
    setUrl(url)
  }

  function downloadImage (urlImage) {
    saveAs(urlImage, 'screenshot.png')
  }

  function selectInput () {
    const inputUrl = document.getElementById('urlInput')

    inputUrl.addEventListener('keyup', function (event) {
      if (event.key === 'Enter') {
        FetchApi(inputUrl.value)
      }
    })
  }

  function changeDecorate () {
    const option = document.getElementById('selectDecorate')
    setLoader(true)
    setDecore(option.value)
  }

  const [url, setUrl] = useState('https://screen.guru/')
  const [decore, setDecore] = useState('white')
  const [loader, setLoader] = useState(true)

  const URL_API = 'https://ancient-basin-38361.herokuapp.com/screenshot/desktop?url='
  const URL_DESKTOP_SIZE = '&width=1280&height=800'
  const URL_MOBILE_SIZE = '&width=390&height=800'

  const styles = {
    desktopWhite: `${URL_API}${url}${URL_DESKTOP_SIZE}&decoration=${decore}`,
    mobileWhite: `${URL_API}${url}${URL_MOBILE_SIZE}&decoration=${decore}`
  }

  function loaderFunction () {
    setTimeout(() => {
      setLoader(false)
    }, 10000)
  }

  loaderFunction()

  return (
    <section className='home'>
      <div className='info_section'>
        <h1>BeatifulScreenshot</h1>
        <h2>Generate styled screenshots for any website from its URL.</h2>
        <a className='primary_button' href='https://github.com/GonzaloEspindola/beatiful-screenshot' target='_blank' rel='noreferrer'><i class='bx bxl-github' /> Repository</a>
      </div>

      <section className='application'>
        <div className='application_header'>
          <div className='theme_select'>
            <i class='bx bx-palette bx-md' />
            <select id='selectDecorate' onChange={changeDecorate}>
              <option>White</option>
              <option>Grey</option>
              <option>Artico</option>
            </select>
          </div>

          <div className='input_container'>
            <i class='bx bx-world bx-md' />
            <input type='text' placeholder='Insert url and press enter' id='urlInput' onFocus={selectInput} />
          </div>

          <div>
            <a className='primary_button' onClick={() => downloadImage(styles.desktopWhite)}><i class='bx bxs-download' /> Download desktop</a>
            <a className='primary_button' onClick={() => downloadImage(styles.mobileWhite)}><i class='bx bxs-download' />Download mobile</a>
          </div>

        </div>

        <div className='screenshot_container'>
          <div className='screenshot'>
            <div className='screenshot_desktop'>
              <img alt='white desktop' src={styles.desktopWhite} />
            </div>
            <div className='screenshot_mobile'>
              <img alt='white mobile' src={styles.mobileWhite} />
            </div>
          </div>

          <div className={`${loader ? 'active' : 'inactive'}`}>
            <img alt='CARGANDO' src={LoaderGif} />
          </div>
        </div>

      </section>

    </section>
  )
}

export { Home }
