import Image from 'next/image';
import { Icon } from 'modules/shared/components/icon';

const Map = () => (
  <div className="bg-almostWhite bg-map bg-center md:bg-left bg-no-repeat bg-cover pt-80 md:pt-0">
    <div className="bg-sapphire w-full md:w-1/3 px-8 py-16 ml-auto">
      <h4 className="font-condensed uppercase text-center text-white text-2xl mb-4">I'm Located outside</h4>
      <h3 className="font-handwriting text-white text-7xl md:text-8xl text-center">Music City</h3>
      <hr className="w-1/2 mx-auto mb-8" />
      <div className="font-sans text-white flex w-2/3 mx-auto">
        <Icon name="map" className="float-left mr-2" />
        <div className="text-lg md:text-xl">
          PO Box 844
          <br />
          Brentwood, TN 37027
        </div>
      </div>
    </div>
  </div>
);

export { Map };
