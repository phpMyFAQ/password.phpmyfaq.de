import { FunctionComponent } from 'react';

export const Footer: FunctionComponent = () => {
  return <>
    <footer className="my-2 pt-2 text-muted text-center text-small">
      Made with <span role="img" aria-label="heart">❤</span>️ and <span role="img" aria-label="coffee">☕️</span>
      <br/>
      <span role="img">©</span> 2019 - 2022 <a target={'_blank'} rel={'noreferrer'} href={'https://rinne.info'}>
        Thorsten Rinne
    </a>
    </footer>
  </>
}
