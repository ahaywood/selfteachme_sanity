import Image from "next/image";
import { Icon } from "modules/shared/components/icon";

const Map = () => {
  return (
    <div className="bg-almostWhite bg-map bg-left bg-no-repeat bg-cover">
      <div className="bg-sapphire w-1/3 px-8 py-16 ml-auto">
        <h4 className="font-condensed uppercase text-center text-white text-2xl mb-4">
          I'm Located outside
        </h4>
        <h3 className="font-handwriting text-white text-8xl text-center">
          Music City
        </h3>
        <hr className="w-1/2 mx-auto mb-8" />
        <div className="font-sans text-white flex w-2/3 mx-auto">
          <Icon name="map" className="float-left mr-2" />
          <div className="text-xl">
            PO Box 844
            <br />
            Brentwood, TN 37027
          </div>
        </div>
      </div>
    </div>
  );
};

export { Map };
