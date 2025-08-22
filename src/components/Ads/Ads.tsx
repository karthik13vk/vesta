import ad1  from "./../../assets/images/adver-1.png";
import ad2  from "./../../assets/images/adver-2.png";

const advsContent = [
  {
    id: 1,
    type: "imageText",
    image: ad1 ,
    content: (
      <>
        In Ayurveda, Moringa (called sigru or shigru) is revered for its{" "}
        <span className="text-white bg-primary px-0.5">
          cleansing and nourishing effects
        </span>{" "}
        on the body. It’s believed to penetrate deeply into{" "}
        <span className="text-white bg-primary px-0.5">
          tissues for detoxification.
        </span>
      </>
    ),
  },
  {
    id: 2,
    type: "imageText",
    image: ad2 ,
    content: (
      <>
        In Ayurveda, Moringa (called sigru or shigru) is revered for its{" "}
        <span className="text-white bg-primary px-0.5">
          cleansing and nourishing effects
        </span>{" "}
        on the body. It’s believed to penetrate deeply into{" "}
        <span className="text-white bg-primary px-0.5">
          tissues for detoxification.
        </span>
      </>
    ),
  },
];

const Ads = () => {
  return (
    <div className="py-10 ads-section bg-bg_6">
      <div className="container px-4 mx-auto lg:px-6 ">
        <div className="flex flex-col justify-between gap-4 md:flex-row lg:flex-1/2">
          {advsContent.map((item) => (
            <div
              key={item.id}
              className="flex md:flex-row flex-col  items-center justify-between gap-4 lg:max-w-[50%]"
            >
              {item.type === "imageText" && (
                <>
                  <img src={item.image} alt="img" />
                  <p className="mt-3 text-md text-text_1">{item.content}</p>
                </>
              )}
              {item.type === "textBlock" && (
                <div>
                  {/* <h1 className="text-4xl font-bold text-white">
                    {item.title}
                  </h1>
                  <p className="mt-3 text-white text-md">{item.description}</p> */}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ads;
