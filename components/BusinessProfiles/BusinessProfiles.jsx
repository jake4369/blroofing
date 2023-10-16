import Link from "next/link";
import Image from "next/image";

const BusinessProfiles = () => {
  return (
    <div className="business-profile-links">
      <p>
        Click the links below to see more reviews from our satisfied customers
      </p>
      <div className="flex-container">
        <Link href="https://g.co/kgs/QADZUz" target="_blank">
          <Image
            src="/assets/misc/google-business.png"
            alt="Google Business logo"
            width={50}
            height={50}
            aria-label="Click this link to visit my Google Business profile page"
          />
        </Link>

        <Link
          href="https://www.mybuilder.com/profile/view/billy_700"
          target="_blank"
        >
          <Image
            src="/assets/misc/mybuilder.png"
            alt="MyBuilder logo"
            width={50}
            height={50}
            aria-label="Click this link to visit my MyBuilder profile page"
          />
        </Link>

        <Link
          href="https://www.yell.com/biz/l-b-roofing-wolverhampton-901757530/"
          target="_blank"
        >
          <Image
            src="/assets/misc/yell-logo.png"
            alt="Yell logo"
            width={50}
            height={50}
            aria-label="Click this link to visit my Yell profile page"
          />
        </Link>
      </div>
    </div>
  );
};

export default BusinessProfiles;
