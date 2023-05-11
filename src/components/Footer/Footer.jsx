import React from 'react';
import logo from '../../img/logo.svg'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="contact">
          <div className="logo">
            <img src={logo} alt="logo" />
            <p>Artificial Intelligence</p>
          </div>
          <p className="description">Lorem ipsum is placeholder text commonly used in the graphic, print, and layouts and visual mockups.</p>
          <ul>
            <li>
              <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.3 1H12.7C13.415 1 14 1.585 14 2.3V10.1C14 10.815 13.415 11.4 12.7 11.4H2.3C1.585 11.4 1 10.815 1 10.1V2.3C1 1.585 1.585 1 2.3 1Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 2.30005L7.5 6.85005L1 2.30005" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <a href="mailto:Company@gmail.com.com">Company@gmail.com.com </a>
            </li>
            <li>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.03682 3.4847C9.64354 3.60307 10.2011 3.8998 10.6382 4.33691C11.0754 4.77401 11.3721 5.33161 11.4905 5.93833L9.03682 3.4847ZM9.03682 1C10.2974 1.14004 11.4728 1.70452 12.3702 2.60077C13.2676 3.49702 13.8335 4.67176 13.9752 5.93212L9.03682 1ZM13.354 10.8891V12.7526C13.3547 12.9256 13.3192 13.0968 13.2499 13.2554C13.1806 13.4139 13.079 13.5562 12.9515 13.6731C12.824 13.7901 12.6735 13.8791 12.5096 13.9345C12.3458 13.9899 12.1721 14.0105 11.9998 13.995C10.0884 13.7873 8.25228 13.1341 6.63909 12.088C5.13823 11.1342 3.86576 9.86177 2.91205 8.36091C1.86225 6.74039 1.20894 4.89538 1.00504 2.97533C0.989519 2.80356 1.00993 2.63043 1.06499 2.46698C1.12004 2.30353 1.20852 2.15333 1.3248 2.02594C1.44108 1.89856 1.58261 1.79679 1.74038 1.7271C1.89815 1.65741 2.0687 1.62134 2.24118 1.62117H4.1047C4.40616 1.61821 4.69841 1.72496 4.92699 1.92153C5.15556 2.1181 5.30486 2.39109 5.34705 2.68959C5.4257 3.28596 5.57157 3.87152 5.78187 4.43509C5.86544 4.65742 5.88353 4.89906 5.83399 5.13135C5.78445 5.36365 5.66935 5.57688 5.50234 5.74577L4.71345 6.53466C5.59773 8.0898 6.88536 9.37743 8.44049 10.2617L9.22938 9.47281C9.39827 9.3058 9.6115 9.1907 9.8438 9.14116C10.0761 9.09162 10.3177 9.10971 10.5401 9.19328C11.1036 9.40358 11.6892 9.54945 12.2856 9.62811C12.5873 9.67067 12.8629 9.82266 13.0599 10.0552C13.2569 10.2877 13.3615 10.5844 13.354 10.8891Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <a href="tel:(064) 332-1233">Phone: (064) 332-1233</a>
            </li>
            <li>
              <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 7.5C14 12.5556 7.5 16.8889 7.5 16.8889C7.5 16.8889 1 12.5556 1 7.5C1 5.77609 1.68482 4.12279 2.90381 2.90381C4.12279 1.68482 5.77609 1 7.5 1C9.22391 1 10.8772 1.68482 12.0962 2.90381C13.3152 4.12279 14 5.77609 14 7.5Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.49998 9.66671C8.6966 9.66671 9.66665 8.69666 9.66665 7.50004C9.66665 6.30342 8.6966 5.33337 7.49998 5.33337C6.30336 5.33337 5.33331 6.30342 5.33331 7.50004C5.33331 8.69666 6.30336 9.66671 7.49998 9.66671Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <a href="https://yandex.ru/maps/202/new-york/search/450%20wall%20st%20new%20york%20ny%2010005%20%D1%81%D1%88%D0%B0/?ll=-74.008110%2C40.707021&sll=44.809312%2C43.169555&sspn=0.015407%2C0.006416&utm_source=share&z=16">450 Wall Street, USA, New York</a>
            </li>
          </ul>
        </div>
        <div className="column information">
          <p className='footer-column_title'>INFORMATION</p>
          <ul className='footer-lists'>
            <li className='footer-list'>New Collection</li>
            <li className='footer-list'>About Store</li>
            <li className='footer-list'>Contact Us</li>
            <li className='footer-list'>Latest News</li>
            <li className='footer-list'>Our Sitemap</li>
            <li className='footer-list'>Orders History</li>
          </ul>
        </div>
        <div className="column footer-menu">
          <p className='footer-column_title'>FOOTER MENU</p>
          <ul className='footer-lists'>
            <li className='footer-list'>Instagram profile</li>
            <li className='footer-list'>New Collection</li>
            <li className='footer-list'>Contact Us</li>
            <li className='footer-list'>Latest News</li>
            <li className='footer-list'>Terms & Conditions</li>
            <li className='footer-list'>Purchase Theme</li>
          </ul>
        </div>
        <div className="column useful-links">
          <p className='footer-column_title'>USEFUL LINKS</p>
          <ul className='footer-lists'>
            <li className='footer-list'>Instagram profile</li>
            <li className='footer-list'>New Collection</li>
            <li className='footer-list'>Contact Us</li>
            <li className='footer-list'>Latest News</li>
            <li className='footer-list'>Terms & Conditions</li>
            <li className='footer-list'>Purchase Theme</li>
          </ul>
        </div>
        <div className="about-store">
          <p className='footer-column_title'>ABOUT THE STORE</p>
          <div className="description">
            Lorem ipsum is placeholder text commonly used in the graphic, print, and layouts and visual mockups.
          </div>
          <div className="site">www.company.com</div>
          <ul className='social-networks'>
            <li>
              <a href="https://www.facebook.com/">
              <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.25 1H7C6.00544 1 5.05161 1.39509 4.34835 2.09835C3.64509 2.80161 3.25 3.75544 3.25 4.75V7H1V10H3.25V16H6.25V10H8.5L9.25 7H6.25V4.75C6.25 4.55109 6.32902 4.36032 6.46967 4.21967C6.61032 4.07902 6.80109 4 7 4H9.25V1Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              </a>
            </li>
            <li>
              <a href="https://www.instargam.com/">
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.5 1H5C2.92893 1 1.25 2.67893 1.25 4.75V12.25C1.25 14.3211 2.92893 16 5 16H12.5C14.5711 16 16.25 14.3211 16.25 12.25V4.75C16.25 2.67893 14.5711 1 12.5 1Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11.75 8.02736C11.8426 8.65154 11.736 9.28902 11.4453 9.84912C11.1547 10.4092 10.6949 10.8634 10.1312 11.1471C9.5676 11.4308 8.92886 11.5296 8.30586 11.4293C7.68287 11.3291 7.10734 11.0349 6.66115 10.5887C6.21496 10.1425 5.92082 9.56702 5.82058 8.94402C5.72033 8.32102 5.81907 7.68228 6.10277 7.11864C6.38647 6.555 6.84066 6.09517 7.40076 5.80454C7.96086 5.51392 8.59834 5.4073 9.22252 5.49986C9.85922 5.59427 10.4487 5.89096 10.9038 6.34609C11.3589 6.80122 11.6556 7.39067 11.75 8.02736Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12.875 4.375H12.8825" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/">
                <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.3909 1.00841C18.5904 1.57307 17.704 2.00495 16.766 2.28741C16.2625 1.70852 15.5934 1.29822 14.8492 1.112C14.1049 0.925781 13.3215 0.972624 12.6047 1.24619C11.888 1.51977 11.2725 2.00686 10.8416 2.64161C10.4107 3.27636 10.1852 4.02813 10.1954 4.79525V5.6312C8.72637 5.6693 7.27068 5.34348 5.95802 4.68277C4.64536 4.02207 3.51647 3.04698 2.6719 1.84435C2.6719 1.84435 -0.671898 9.36789 6.85164 12.7117C5.13003 13.8803 3.07914 14.4663 1 14.3836C8.52354 18.5633 17.719 14.3836 17.719 4.77018C17.7182 4.53733 17.6958 4.30505 17.6521 4.07634C18.5053 3.23495 19.1073 2.17264 19.3909 1.00841V1.00841Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://ru.linkedin.com/">
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.1409 5.5C12.3343 5.5 13.4789 5.97411 14.3229 6.81802C15.1668 7.66193 15.6409 8.80653 15.6409 10V15.25H12.6409V10C12.6409 9.60218 12.4828 9.22064 12.2015 8.93934C11.9202 8.65804 11.5387 8.5 11.1409 8.5C10.743 8.5 10.3615 8.65804 10.0802 8.93934C9.7989 9.22064 9.64087 9.60218 9.64087 10V15.25H6.64087V10C6.64087 8.80653 7.11498 7.66193 7.95889 6.81802C8.8028 5.97411 9.94739 5.5 11.1409 5.5V5.5Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3.64087 6.25H0.640869V15.25H3.64087V6.25Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2.14087 4C2.9693 4 3.64087 3.32843 3.64087 2.5C3.64087 1.67157 2.9693 1 2.14087 1C1.31244 1 0.640869 1.67157 0.640869 2.5C0.640869 3.32843 1.31244 4 2.14087 4Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/">
                <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.2641 2.9799C18.1669 2.59162 17.9689 2.23586 17.6903 1.94856C17.4116 1.66125 17.062 1.45258 16.6769 1.34362C15.2697 1 9.64087 1 9.64087 1C9.64087 1 4.01207 1 2.60487 1.37634C2.21973 1.48531 1.87016 1.69398 1.59148 1.98128C1.3128 2.26858 1.11487 2.62434 1.01768 3.01262C0.760143 4.44073 0.634167 5.88945 0.641337 7.34058C0.632157 8.80263 0.758141 10.2624 1.01768 11.7013C1.12482 12.0775 1.32719 12.4197 1.60522 12.6949C1.88326 12.97 2.22756 13.1689 2.60487 13.2721C4.01207 13.6484 9.64087 13.6484 9.64087 13.6484C9.64087 13.6484 15.2697 13.6484 16.6769 13.2721C17.062 13.1631 17.4116 12.9545 17.6903 12.6672C17.9689 12.3799 18.1669 12.0241 18.2641 11.6358C18.5196 10.2185 18.6456 8.78078 18.6404 7.34058C18.6496 5.87853 18.5236 4.41876 18.2641 2.9799V2.9799Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7.80005 10.0157L12.5043 7.34035L7.80005 4.66504V10.0157Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </li>
          </ul>
          <div className="select">
            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.01937 14C10.3438 14 13.0387 11.0899 13.0387 7.5C13.0387 3.91015 10.3438 1 7.01937 1C3.69496 1 1 3.91015 1 7.5C1 11.0899 3.69496 14 7.01937 14Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M1 7.5H13.0387" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7.01938 1C8.52499 2.77993 9.38063 5.08982 9.42713 7.5C9.38063 9.91018 8.52499 12.2201 7.01938 14C5.51377 12.2201 4.65813 9.91018 4.61163 7.5C4.65813 5.08982 5.51377 2.77993 7.01938 1V1Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <select className='select-language' name="" id="">
            <option value="english">English</option>
            <option value="russian">Русский</option>
            <option value="français">Français</option>
            <option value="español">Español</option>
          </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;