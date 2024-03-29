import { FC } from "react";

interface WeatherIconProps {
  condition?: string;
  width?: string;
  height?: string;
}

export const WeatherIcon: FC<WeatherIconProps> = ({
  condition,
  width = "24",
  height = "24",
}) => {
  switch (condition) {
    case "Clear":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          fill="none"
          viewBox="0 0 27 27"
        >
          <path
            fill="#fff"
            d="M6.976 5.45l-.432-.434a1.097 1.097 0 00-1.55 0l-.012.011a1.098 1.098 0 000 1.557l.432.434a1.087 1.087 0 001.551 0l.011-.01a1.098 1.098 0 000-1.558zm-3.368 7.075h-1.13c-.609 0-1.096.49-1.096 1.101v.011c0 .612.487 1.102 1.096 1.102h1.12a1.08 1.08 0 001.107-1.09v-.012c0-.623-.487-1.112-1.097-1.112zM13.58 1.456h-.01c-.621 0-1.109.49-1.109 1.101v1.068c0 .612.488 1.102 1.097 1.102h.011a1.08 1.08 0 001.108-1.09v-1.08c0-.611-.487-1.1-1.097-1.1zm8.575 3.571a1.11 1.11 0 00-1.562-.011l-.432.434a1.098 1.098 0 000 1.557l.011.011c.432.434 1.13.434 1.551 0l.432-.434a1.098 1.098 0 000-1.557zM20.15 21.825l.432.434a1.1 1.1 0 001.562 0 1.111 1.111 0 000-1.569l-.432-.434a1.097 1.097 0 00-1.55 0 1.101 1.101 0 00-.012 1.569zm2.282-8.199v.011c0 .612.488 1.102 1.097 1.102h1.12c.608 0 1.096-.49 1.096-1.102v-.01c0-.613-.488-1.102-1.097-1.102h-1.119c-.61 0-1.097.49-1.097 1.101zm-8.863-6.663c-3.667 0-6.647 2.992-6.647 6.674 0 3.683 2.98 6.675 6.647 6.675 3.667 0 6.648-2.992 6.648-6.675 0-3.682-2.98-6.674-6.648-6.674zm-.01 18.855h.01c.61 0 1.097-.489 1.097-1.1v-1.069c0-.612-.487-1.101-1.097-1.101h-.01c-.61 0-1.098.49-1.098 1.101v1.068c0 .612.488 1.101 1.097 1.101zm-8.576-3.57a1.1 1.1 0 001.562 0l.432-.434a1.108 1.108 0 000-1.558l-.01-.01a1.1 1.1 0 00-1.563 0l-.432.433a1.121 1.121 0 00.011 1.569z"
          ></path>
        </svg>
      );
    case "Clouds":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          fill="none"
          viewBox="0 0 32 31"
        >
          <g fill="#fff" clipPath="url(#clip0_1_3265)">
            <path d="M5.093 5.661l-.335-.326a.873.873 0 00-1.206 0l-.009.008a.807.807 0 000 1.172l.336.326a.865.865 0 001.206 0l.008-.008a.807.807 0 000-1.172zM2.475 10.982h-.878a.837.837 0 00-.853.829v.008c0 .46.379.829.853.829h.87a.827.827 0 00.86-.82v-.009a.839.839 0 00-.852-.837zM10.227 2.658h-.009c-.482 0-.861.368-.861.828v.803c0 .46.379.828.853.828h.008a.827.827 0 00.861-.82v-.811a.837.837 0 00-.852-.828zM16.893 5.343a.884.884 0 00-1.214-.008l-.336.326a.807.807 0 000 1.172l.008.008a.865.865 0 001.206 0l.336-.326a.807.807 0 000-1.172zM10.218 6.8c-2.85 0-5.168 2.25-5.168 5.02 0 1.794.974 3.372 2.435 4.26.7-1.969 2.623-3.382 4.886-3.382.09 0 .178.002.266.006a6.881 6.881 0 012.12-3.284c-.877-1.56-2.582-2.62-4.539-2.62zM3.543 18.295a.876.876 0 001.215 0l.335-.326a.814.814 0 000-1.172l-.008-.008a.876.876 0 00-1.215 0l-.336.326a.824.824 0 00.01 1.18zM9.787 26.503h16.796c2.854 0 5.167-2.247 5.167-5.02 0-2.355-1.668-4.33-3.92-4.873.03-.254.045-.513.045-.775 0-3.812-3.182-6.902-7.106-6.902-3.255 0-5.999 2.126-6.84 5.026a5.44 5.44 0 00-.266-.006c-2.854 0-5.167 2.247-5.167 5.02 0 .071.001.142.004.213-1.508.515-2.588 1.911-2.588 3.552 0 2.08 1.735 3.765 3.875 3.765z"></path>
          </g>
          <defs>
            <clipPath id="clip0_1_3265">
              <path
                fill="#fff"
                d="M0 0H31.006V30.121H0z"
                transform="translate(.744 .147)"
              ></path>
            </clipPath>
          </defs>
        </svg>
      );
    case "Rain":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          fill="none"
          viewBox="0 0 28 28"
        >
          <path
            fill="#fff"
            d="M5.833 19.833H21a4.667 4.667 0 001.127-9.196A6.417 6.417 0 009.573 8.173a4.667 4.667 0 00-4.902 4.858 3.502 3.502 0 001.162 6.802zM8.65 21a.783.783 0 00-.7.433L6.4 24.534a.783.783 0 001.4.7l1.55-3.101A.783.783 0 008.65 21zM12.15 21c.582 0 .96.612.7 1.133l-1.55 3.101a.782.782 0 11-1.4-.7l1.55-3.101a.783.783 0 01.7-.433zM19.15 21c.582 0 .96.612.7 1.133l-1.55 3.101a.782.782 0 11-1.4-.7l1.55-3.101a.783.783 0 01.7-.433zM15.65 21c.582 0 .96.612.7 1.133l-1.55 3.101a.782.782 0 11-1.4-.7l1.55-3.101a.783.783 0 01.7-.433z"
          ></path>
        </svg>
      );
    case "Drizzle":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          fill="none"
          viewBox="0 0 27 27"
        >
          <g fill="#fff" clipPath="url(#clip0_1_3267)">
            <path d="M3.74 2.711L4.029 3a.726.726 0 010 1.034l-.007.007a.726.726 0 01-1.033 0L2.7 3.752a.726.726 0 010-1.033l.007-.008a.733.733 0 011.034 0zM1.031 7.694h.753a.73.73 0 01.731.739v.007c0 .406-.325.73-.738.724H1.03a.728.728 0 01-.73-.731v-.008c0-.406.324-.73.73-.73zM8.421.349h.007c.406 0 .731.325.731.73v.717c0 .406-.325.73-.738.723h-.007a.728.728 0 01-.731-.73v-.71A.73.73 0 018.42.35zM13.102 2.711a.742.742 0 011.04.008.726.726 0 010 1.033l-.287.288a.726.726 0 01-1.034 0l-.007-.007a.726.726 0 010-1.034l.288-.288zM3.992 8.433a4.433 4.433 0 014.429-4.43c1.677 0 3.139.936 3.89 2.313a6.092 6.092 0 00-1.817 2.898 4.431 4.431 0 00-4.416 2.978 4.43 4.43 0 01-2.086-3.76zM3.74 14.147a.735.735 0 01-1.04 0 .742.742 0 01-.008-1.041l.288-.288a.735.735 0 011.041 0l.007.007c.281.28.288.746 0 1.034l-.287.288z"></path>
            <path d="M22.448 21.389H8.052a3.322 3.322 0 01-1.104-6.457 4.43 4.43 0 014.653-4.611 6.09 6.09 0 0111.916 2.339 4.431 4.431 0 01-1.07 8.729zM11.358 25.85l1.472-2.943a.743.743 0 111.329.664l-1.472 2.944a.743.743 0 01-1.33-.664zM14.68 25.85l1.472-2.943a.743.743 0 011.329.664l-1.472 2.944a.743.743 0 01-1.329-.664z"></path>
          </g>
          <defs>
            <clipPath id="clip0_1_3267">
              <path
                fill="#fff"
                d="M0 0H26.577V26.577H0z"
                transform="translate(.3 .349)"
              ></path>
            </clipPath>
          </defs>
        </svg>
      );
    case "Thunderstorm":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          fill="none"
          viewBox="0 0 26 26"
        >
          <path
            fill="#fff"
            d="M16.027 18.463h3.091a4.134 4.134 0 00.998-8.147A5.684 5.684 0 008.995 8.133a4.134 4.134 0 00-4.343 4.304 3.102 3.102 0 001.03 6.026h2.944l4.427-7.748c.526-.92 1.931-.547 1.931.513v4.134h1.034c.793 0 1.29.857.897 1.546l-.888 1.555z"
          ></path>
          <path
            fill="#fff"
            d="M9.816 18.463l4.135-7.235v5.168h2.067l-4.135 7.235v-5.168H9.816z"
          ></path>
        </svg>
      );
    case "Snow":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          fill="none"
          viewBox="0 0 24 25"
        >
          <g fill="#fff" clipPath="url(#clip0_1_3215)">
            <path d="M5.004 12.523a2.984 2.984 0 00-.608.295 7.065 7.065 0 01-2.314-1.555 7.081 7.081 0 010-10.03c.284-.284.582-.54.901-.766.533-.376 1.37.255 1.314.844A7.07 7.07 0 006.348 7a7.053 7.053 0 001.995 1.407 4.001 4.001 0 00-3.34 4.116zM10.533 3.815l.527 1.747a5.604 5.604 0 00-.154.128L9.371 4.648 7.594 5.853l.615-2.038L6.5 2.523l2.155-.06.716-1.998.716 1.998 2.155.06-1.709 1.292zM16.608 2.63l1.108-.833-1.392-.034-.466-1.298-.466 1.298L14 1.797l1.108.832-.399 1.32 1.149-.78 1.148.78-.398-1.32z"></path>
            <path d="M19.009 19.353H20a4 4 0 00.966-7.882 5.5 5.5 0 00-10.76-2.112 4 4 0 00-4.202 4.164A3.001 3.001 0 007 19.353h4.848l4.284-7.496c.508-.89 1.868-.53 1.868.496v4h1a1 1 0 01.868 1.496l-.86 1.504z"></path>
            <path d="M13 19.353l4-7v5h2l-4 7v-5h-2zM11.552 24.353h-1.104l.11-1.222-1.006.709L9 22.867l1.103-.514L9 21.84l.552-.972 1.007.709-.11-1.223h1.103l-.11 1.223 1.006-.709.552.973-1.103.513 1.103.514-.552.973-1.007-.709.11 1.222z"></path>
          </g>
          <defs>
            <clipPath id="clip0_1_3215">
              <path
                fill="#fff"
                d="M0 0H24V24H0z"
                transform="translate(0 .353)"
              ></path>
            </clipPath>
          </defs>
        </svg>
      );
  }
};
