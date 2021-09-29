import { useEffect } from 'react';
import Head from 'next/head';
import kwesforms from 'kwesforms';

export default function community() {
  useEffect(() => {
    kwesforms.init();
  }, []);

  return (
    <>
      <Head>
        <script src="https://gumroad.com/js/gumroad.js" />
      </Head>
      <div>
        <a className="gumroad-button" href="https://gumroad.com/l/FblHK?wanted=true" data-gumroad-single-product="true">
          Count me in!
        </a>

        <form action="https://kwesforms.com/api/foreign/forms/mWq5Oe2ay3rPz7zEBk1e" className="kwes-form">
          <label htmlFor="name">Your Name</label>
          <input type="text" name="name" />

          <label htmlFor="name">Your Email</label>
          <input type="text" name="email" />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
