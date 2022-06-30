import React from 'react'

function Screenshot () {
  return (
    <section className='home'>
      <div className='info_section'>
        <h1>BeatifulScreenshot</h1>
        <h2>Generate styled screenshots for any website from its URL.</h2>
        <a className='primary_button' href='https://github.com/GonzaloEspindola/beatiful-screenshot' target='_blank' rel='noreferrer'>Repository</a>
      </div>
      <div className='app_section'>
        <input type='text' placeholder='https://domain.com/' id='urlInput' />
        <div />
        <p>Developed by <a href='https://github.com/GonzaloEspindola' target='_blank' rel='noreferrer'>Gonzalo Espindola</a></p>
      </div>
    </section>
  )
}

export { Screenshot }
