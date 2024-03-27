"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import "./Contacts.scss";

const Contacts = ({ fiveSectionRef }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: {} });

  const baseUrl =
    "https://api.telegram.org/bot6515309705:AAG2rAjFjfDJNTzj4MIfELZfWJiPvDpJWQw";

  const submit = async (data) => {
    console.log(data);
    const url = `${baseUrl}/sendMessage?chat_id=-4197712278&text=${data.message}`;
    const chatId = "-4197712278";

    const mess = `
    <strong>${data.name}</strong>
    <i>${data.message}</i>
    `;

    const res3 = await axios.post(`${baseUrl}/sendMessage`, {
      chat_id: chatId,
      parse_mode: "html",
      text: mess,
    });
    reset();
  };
  const error = (data) => {
    console.log(data);
  };

  return (
    <>
      <section ref={fiveSectionRef} className="contacts">
        <div className="contacts__inner">
          <div className="contacts__title">
            <div className="front-text2">
              <div className="front-text2__title">
                <span>Dmitry </span> <span>Sinikov</span>
              </div>
              <div className="front-text2__subtitle">Web-Development</div>
            </div>
          </div>
          <div className="contacts__form-wrapper"></div>
          <form
            onSubmit={handleSubmit(submit, error)}
            className="contacts__form contacts-form"
          >
            <div className="contacts-form__shabow"></div>
            <div
              className={
                errors.name
                  ? "contacts-form__item error"
                  : "contacts-form__item"
              }
            >
              <label className="contacts-form__label" htmlFor="name">
                Введите своё имя
              </label>
              <input
                className="contacts__name"
                id="name"
                // name="name"
                type="text"
                {...register("name", { required: "Пожалуйста, назовитесь )" })}
                aria-invalid={errors.name ? true : false}
              />
              {errors.name && <p role="alert">{errors.name.message}</p>}
            </div>
            <div className="contacts-form__item">
              <label className="contacts-form__label" htmlFor="message">
                Напишите своё сообщение
              </label>
              <textarea
                className="contacts-form__message"
                id="message"
                // name="message"
                type="text"
                {...register("message", {
                  required: "Кажется, Вы забыли написать сообщение",
                })}
                aria-invalid={errors.message ? true : false}
              />
              {errors.name && <p role="alert">{errors.message.message}</p>}
            </div>
            <button
              className="contacts-form__button neon-btn neon-btn--blue"
              type="submit"
            >
              отправить
            </button>
          </form>
          <div className="contacts-social">
            <div className="contacts-social__inner">
              <div className="contacts-social__item">
                <a
                  href="https://t.me/LessnerJ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 96 96"
                    width="96px"
                    height="96px"
                    baseProfile="basic"
                  >
                    <path
                      fill="#0fd2ff"
                      d="M48,86.003c-18.563,0-37.577-13.037-38-37.954c0-0.034,0-0.068,0-0.102	C10.426,23.039,29.435,10.003,47.992,10c0.003,0,0.006,0,0.008,0c8.45,0,16.682,2.844,23.808,8.225	c1.012,0.764,1.403,2.044,1.084,3.195c1.112-0.441,2.426-0.189,3.294,0.733c6.247,6.642,9.641,15.562,9.814,25.795	c0,0.034,0,0.068,0,0.102C85.574,72.967,66.562,86.003,48,86.003z M16,47.999c0.398,21.987,16.861,32.004,32,32.004	c15.137,0,31.599-10.016,32-32.003c-0.158-8.695-2.988-16.21-8.186-21.736c-0.744-0.792-0.976-1.881-0.706-2.857	c-0.941,0.375-2.05,0.26-2.916-0.394C62.116,18.425,55.134,16,48,16c-0.003,0-0.004,0-0.006,0	C32.859,16.002,16.401,26.019,16,47.999z"
                      opacity=".3"
                    />
                    <path
                      fill="#0fd2ff"
                      d="M48,85.003c-18.075,0-36.589-12.699-37-36.971C11.414,23.701,29.924,11.003,47.993,11	c0.002,0,0.005,0,0.007,0c8.23,0,16.254,2.774,23.205,8.023c0.882,0.666,1.057,1.92,0.391,2.801c-0.664,0.88-1.92,1.058-2.801,0.391	C62.544,17.495,55.353,15,48,15c-0.003,0-0.004,0-0.007,0C32.374,15.002,15.387,25.341,15,48.033	c0.384,22.631,17.376,32.97,33,32.97c15.622,0,32.613-10.338,33-33.037c-0.152-8.901-3.076-16.666-8.457-22.387	c-0.757-0.805-0.718-2.07,0.087-2.827c0.803-0.755,2.069-0.718,2.827,0.087C81.53,29.296,84.83,37.985,85,47.966	C84.586,72.304,66.073,85.003,48,85.003z"
                      opacity=".3"
                    />
                    <path
                      fill="#0fd2ff"
                      d="M56.759,70.686c-2.124,0-3.949-1.206-4.664-1.677c-0.363-0.24-1.046-0.686-1.9-1.244	c-3.79-2.476-7.595-4.968-8.852-5.867l-0.179-0.127c-1.185-0.841-3.166-2.248-3.361-4.727c-0.071-0.897,0.108-1.783,0.534-2.65	c-0.364,0.244-0.628,0.421-0.771,0.518c-2.803,1.904-5.501,2.286-9.015,1.276c-2.186-0.627-4.306-1.36-5.324-1.711l-0.241-0.083	c-2.694-0.922-4.105-2.396-4.189-4.379c-0.135-3.182,3.473-4.769,4.658-5.291c11.094-4.881,24.95-10.673,32.223-13.692l0.243-0.101	c3.449-1.431,7.027-2.66,9.553-0.652c2.553,2.028,1.915,5.86,1.643,7.496c-0.204,1.227-0.525,3.316-0.917,5.864	c-0.919,5.977-2.178,14.162-3.267,20.018c-0.243,1.308-0.983,5.285-4.111,6.614C58.121,70.567,57.425,70.686,56.759,70.686z M44.147,56.523c0.171,0.128,0.351,0.255,0.489,0.354l0.195,0.139c1.26,0.9,5.882,3.92,8.645,5.725	C54.34,63.306,55.031,63.757,55.4,64c0.481,0.318,0.823,0.489,1.047,0.58c0.153-0.315,0.382-0.923,0.586-2.021	c1.071-5.763,2.321-13.895,3.234-19.833c0.397-2.58,0.723-4.695,0.93-5.937c0.103-0.616,0.152-1.083,0.173-1.43	c-0.61,0.151-1.594,0.467-3.15,1.113l-0.242,0.101c-6.922,2.873-19.825,8.266-30.589,12.977c0.858,0.281,1.837,0.589,2.818,0.872	c2.156,0.619,2.946,0.235,3.987-0.473c0.454-0.309,2.117-1.417,4.369-2.914c1.379-0.919,3.241-0.543,4.159,0.837	c0.203,0.305,0.343,0.633,0.422,0.97c2.374-2.531,5.59-5.913,8.535-8.723c1.196-1.144,3.097-1.098,4.241,0.1	c1.144,1.199,1.099,3.098-0.101,4.242c-3.459,3.3-7.37,7.488-9.706,9.99c-0.963,1.031-1.656,1.771-1.942,2.05	C44.164,56.508,44.155,56.516,44.147,56.523z"
                      opacity=".3"
                    />
                    <path
                      fill="#0fd2ff"
                      d="M56.767,69.682c-1.837,0-3.482-1.086-4.12-1.508c-0.365-0.24-1.049-0.688-1.905-1.247	c-2.976-1.944-7.472-4.882-8.816-5.843l-0.182-0.129c-1.109-0.787-2.785-1.977-2.943-3.99c-0.107-1.357,0.523-2.717,1.876-4.04	c0.263-0.257,0.898-0.94,1.783-1.888c2.374-2.542,6.347-6.795,9.91-10.195c0.8-0.761,2.064-0.733,2.828,0.067	c0.763,0.799,0.732,2.065-0.066,2.828c-3.48,3.32-7.404,7.521-9.748,10.031c-0.947,1.014-1.629,1.742-1.91,2.017	c-0.479,0.469-0.627,0.752-0.67,0.86c0.177,0.282,0.871,0.775,1.256,1.048l0.192,0.137c1.276,0.913,5.91,3.94,8.679,5.749	c0.862,0.563,1.552,1.014,1.92,1.257c1.278,0.843,1.887,0.887,2.017,0.832c0.007-0.002,0.663-0.31,1.15-2.925	c1.074-5.779,2.326-13.919,3.24-19.864c0.396-2.574,0.721-4.685,0.927-5.925c0.288-1.731,0.199-2.466,0.134-2.729	c-0.386-0.034-1.485,0.082-4.481,1.325l-0.242,0.101C50.34,38.66,36.52,44.438,25.468,49.3c-0.317,0.14-0.581,0.268-0.801,0.384	l0.191,0.066c0.979,0.338,3.015,1.041,5.072,1.632c2.351,0.676,3.429,0.343,4.825-0.606c0.454-0.309,2.113-1.414,4.361-2.909	c0.922-0.611,2.163-0.361,2.772,0.558c0.612,0.919,0.362,2.161-0.558,2.773c-2.23,1.483-3.878,2.581-4.328,2.887	c-2.567,1.743-4.935,2.073-8.178,1.142c-2.159-0.62-4.263-1.347-5.273-1.696l-0.241-0.083c-2.268-0.776-3.452-1.946-3.517-3.476	c-0.095-2.24,2.272-3.546,4.062-4.333c11.086-4.877,24.936-10.667,32.204-13.684l0.243-0.101c3.872-1.606,6.653-2.296,8.547-0.792	c1.844,1.464,1.681,4.132,1.278,6.549c-0.204,1.229-0.526,3.323-0.919,5.876c-0.918,5.97-2.176,14.146-3.261,19.987	c-0.381,2.042-1.159,4.873-3.52,5.876C57.872,69.586,57.311,69.682,56.767,69.682z"
                      opacity=".3"
                    />
                    <path
                      fill="#0fd2ff"
                      d="M48,84.003c-17.587,0-35.6-12.361-36-35.987C12.403,24.363,30.412,12.003,47.993,12	c0.002,0,0.005,0,0.007,0c8.011,0,15.826,2.704,22.603,7.821c0.44,0.333,0.528,0.96,0.195,1.4c-0.333,0.441-0.96,0.527-1.4,0.195	C62.972,16.565,55.572,14,48,14c-0.003,0-0.004,0-0.007,0C31.39,14.003,14.381,25.688,14,48.016	c0.378,22.301,17.391,33.987,34,33.987c16.607,0,33.619-11.686,34-34.02c-0.156-9.188-3.175-17.184-8.729-23.089	c-0.378-0.402-0.359-1.035,0.043-1.414c0.401-0.377,1.034-0.359,1.414,0.043c5.9,6.273,9.106,14.731,9.271,24.459	C83.597,71.642,65.584,84.003,48,84.003z"
                    />
                    <path
                      fill="#0fd2ff"
                      d="M56.77,68.682c-1.033,0-2.214-0.445-3.572-1.343c-0.366-0.241-1.052-0.689-1.909-1.25	c-2.788-1.821-7.454-4.87-8.782-5.819l-0.185-0.131c-1.07-0.76-2.403-1.706-2.525-3.252c-0.083-1.063,0.433-2.125,1.579-3.247	c0.268-0.262,0.914-0.956,1.815-1.92c2.366-2.534,6.326-6.774,9.869-10.154c0.398-0.381,1.033-0.366,1.414,0.033	c0.381,0.4,0.366,1.033-0.033,1.414c-3.501,3.34-7.437,7.554-9.788,10.072c-0.932,0.998-1.603,1.714-1.879,1.985	c-0.677,0.662-1.017,1.236-0.983,1.66c0.049,0.614,0.92,1.233,1.689,1.779l0.189,0.135c1.294,0.925,5.938,3.959,8.713,5.772	c0.861,0.563,1.55,1.012,1.917,1.254c1.329,0.878,2.326,1.188,2.958,0.918c0.754-0.32,1.356-1.587,1.742-3.664	c1.077-5.794,2.331-13.943,3.246-19.894c0.395-2.569,0.719-4.676,0.925-5.913c0.455-2.736,0.079-3.498-0.186-3.708	c-0.59-0.47-2.451-0.063-5.531,1.214l-0.242,0.101c-7.259,3.013-21.086,8.792-32.146,13.659c-1.935,0.851-2.235,1.4-2.271,1.483l0,0	c0.034,0,0.295,0.332,1.492,0.742l0.246,0.085c0.986,0.341,3.039,1.05,5.123,1.648c2.702,0.776,4.075,0.338,5.663-0.74	c0.452-0.308,2.109-1.412,4.353-2.903c0.457-0.306,1.079-0.182,1.387,0.279c0.306,0.46,0.181,1.081-0.279,1.386	c-2.235,1.487-3.885,2.586-4.337,2.893c-1.934,1.315-3.921,1.992-7.339,1.008c-2.134-0.613-4.221-1.333-5.224-1.68l-0.242-0.083	c-0.686-0.234-2.774-0.95-2.843-2.573c-0.069-1.628,1.944-2.706,3.466-3.375c11.077-4.874,24.919-10.66,32.184-13.675l0.243-0.101	c3.535-1.467,6.03-2.136,7.542-0.933c1.438,1.141,1.269,3.472,0.914,5.602c-0.205,1.232-0.527,3.33-0.921,5.888	c-0.917,5.964-2.173,14.131-3.256,19.956c-0.537,2.886-1.467,4.519-2.927,5.139C57.643,68.597,57.22,68.682,56.77,68.682z"
                    />
                  </svg>
                </a>
              </div>
              <div className="contacts-social__item">
                <a
                  href="https://github.com/DeimanHesse"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 96 96"
                    width="96px"
                    height="96px"
                  >
                    <path
                      fill="#0fd2ff"
                      d="M56.999,83.827c-0.885,0-1.694-0.592-1.932-1.488c-0.283-1.067,0.353-2.162,1.42-2.445 C70.92,76.062,81,62.947,81,48c0-18.196-14.804-33-33-33S15,29.804,15,48c0,14.063,8.924,26.505,22,31.118v-5.567 c-3.012,0.376-6.001-0.297-8.465-1.92c-1.856-1.227-3.278-2.929-4.006-4.793c-0.084-0.202-0.18-0.455-0.275-0.71 c-0.143-0.38-0.277-0.739-0.422-1.018c-0.533-1.106-1.543-1.962-2.667-2.292c-0.034-0.01-0.067-0.021-0.101-0.032 c-1.344-0.474-2.138-1.803-1.931-3.231c0.207-1.43,1.343-2.479,2.764-2.552c3.775-0.278,7.491,2.055,9.422,5.927 c0.018,0.035,0.034,0.071,0.05,0.107c0.446,1.046,1.533,1.77,2.769,1.844c0.044,0.002,0.089,0.007,0.133,0.012 c0.955,0.126,1.991-0.119,2.886-0.653c0.086-0.483,0.208-0.958,0.362-1.42C29.317,61.615,23,54.531,23,46v-2 c0-4.172,1.268-8.138,3.675-11.529c-0.445-2.235-0.636-5.389,0.402-9.021c0.217-0.762,0.864-1.322,1.648-1.432 c0.201-0.027,4.646-0.595,8.843,2.747C39.354,24.257,41.176,24,43,24c1.104,0,2,0.896,2,2s-0.896,2-2,2 c-1.76,0-3.524,0.303-5.243,0.898c-0.709,0.243-1.493,0.074-2.034-0.44c-1.871-1.78-3.871-2.309-5.144-2.45 c-0.5,2.679-0.197,4.925,0.187,6.422c0.155,0.602,0.021,1.24-0.362,1.729C28.177,37.005,27,40.408,27,44v2c0,7.168,5.832,13,13,13 h0.76c0.77,0,1.47,0.441,1.803,1.135c0.333,0.693,0.238,1.517-0.243,2.117c-0.755,0.94-1.204,2.071-1.299,3.27 c-0.043,0.543-0.305,1.044-0.727,1.39c-1.851,1.515-4.201,2.223-6.462,1.958c-2.031-0.14-3.843-1.064-5.072-2.523 c0.486,0.741,1.162,1.407,1.978,1.947c1.76,1.159,3.942,1.601,6.135,1.234c0.048-0.008,0.096-0.014,0.144-0.018 c0.15-0.015,0.579-0.074,1.308-0.336c0.612-0.217,1.294-0.127,1.826,0.247C40.683,69.796,41,70.406,41,71.057v10.77 c0,0.621-0.289,1.207-0.781,1.585c-0.492,0.379-1.131,0.507-1.732,0.348C22.303,79.464,11,64.759,11,48c0-20.402,16.598-37,37-37 s37,16.598,37,37c0,16.759-11.303,31.464-27.487,35.759C57.341,83.805,57.168,83.827,56.999,83.827z M22.172,60.993 c-0.01,0-0.02,0.001-0.03,0.002C22.152,60.994,22.163,60.994,22.172,60.993z"
                      opacity=".3"
                    />
                    <path
                      fill="#0fd2ff"
                      d="M56.998,84.827c-1.327,0-2.541-0.888-2.897-2.231c-0.425-1.602,0.528-3.244,2.13-3.669 C70.226,75.212,80,62.494,80,48c0-17.645-14.355-32-32-32c-6.313,0-12.206,1.838-17.17,5.007c1.976,0.184,4.541,0.892,6.951,2.664 C39.5,23.226,41.249,23,43,23c1.657,0,3,1.343,3,3s-1.343,3-3,3c-1.648,0-3.302,0.283-4.916,0.843 c-1.061,0.367-2.238,0.113-3.051-0.66c-1.253-1.193-2.571-1.753-3.621-2.011c-0.241,2.068,0.012,3.801,0.322,5.009 c0.231,0.902,0.031,1.861-0.543,2.595C29.104,37.444,28,40.634,28,44v2c0,6.617,5.383,12,12,12h0.76 c1.154,0,2.206,0.662,2.705,1.702c0.5,1.041,0.357,2.275-0.365,3.175c-0.628,0.784-1.002,1.726-1.082,2.724 c-0.064,0.813-0.458,1.566-1.09,2.084c-0.259,0.211-0.526,0.409-0.801,0.592c0.209,0.085,0.41,0.194,0.599,0.327 C41.525,69.165,42,70.08,42,71.057v10.77c0,0.932-0.433,1.81-1.171,2.378c-0.739,0.569-1.699,0.76-2.599,0.521 C21.609,80.314,10,65.212,10,48c0-20.953,17.047-38,38-38s38,17.047,38,38c0,17.212-11.609,32.314-28.23,36.726 C57.512,84.794,57.253,84.827,56.998,84.827z M19.917,63.335C23.412,69.729,29.046,74.862,36,77.671v-3.032 c-2.863,0.117-5.659-0.622-8.015-2.172c-2.029-1.342-3.585-3.21-4.388-5.266c-0.081-0.192-0.18-0.456-0.28-0.722 c-0.132-0.352-0.256-0.683-0.373-0.906c-0.429-0.889-1.202-1.543-2.062-1.796c-0.051-0.015-0.101-0.031-0.151-0.049 C20.44,63.626,20.168,63.493,19.917,63.335z M32.038,62.142c0.061,0.112,0.119,0.227,0.177,0.341 c0.026,0.054,0.051,0.107,0.075,0.162c0.299,0.7,1.048,1.187,1.909,1.238c0.067,0.004,0.133,0.01,0.2,0.019 c0.595,0.077,1.231-0.035,1.825-0.3C34.754,63.286,33.351,62.792,32.038,62.142z M22.263,61.989 c-0.016,0.001-0.033,0.002-0.049,0.003C22.23,61.991,22.247,61.99,22.263,61.989z M25.661,25.108C19.704,30.924,16,39.037,16,48 c0,4.017,0.75,7.896,2.133,11.486c0.003-0.025,0.007-0.05,0.01-0.075c0.276-1.908,1.799-3.31,3.703-3.407 c1.176-0.082,2.352,0.06,3.476,0.404C23.231,53.468,22,49.875,22,46v-2c0-4.237,1.245-8.272,3.615-11.756 C25.203,29.912,25.219,27.493,25.661,25.108z"
                      opacity=".3"
                    />
                    <path
                      fill="#0fd2ff"
                      d="M57,82.826c-0.442,0-0.847-0.296-0.966-0.743c-0.142-0.534,0.176-1.082,0.71-1.224 C71.614,76.913,82,63.4,82,48c0-18.748-15.252-34-34-34S14,29.252,14,48c0,14.962,9.805,28.143,24,32.5v-8.114 c-0.252,0.054-0.49,0.091-0.709,0.111c-2.871,0.479-5.81-0.124-8.206-1.701c-1.685-1.113-2.971-2.647-3.625-4.322 c-0.088-0.212-0.179-0.453-0.271-0.696c-0.154-0.41-0.299-0.798-0.472-1.13c-0.646-1.344-1.864-2.375-3.271-2.789 c-0.938-0.328-1.462-1.211-1.324-2.161c0.137-0.95,0.888-1.647,1.826-1.696c3.394-0.246,6.727,1.868,8.477,5.375 c0.627,1.467,2.018,2.404,3.654,2.503c1.38,0.172,2.832-0.217,4-1.048c0.13-1.003,0.427-1.969,0.878-2.864 C30.619,61.427,24,54.472,24,46v-2c0-4.106,1.293-8.003,3.746-11.302c-0.48-2.131-0.759-5.291,0.293-8.973 c0.109-0.381,0.432-0.662,0.824-0.716c0.187-0.03,4.504-0.576,8.479,2.867C39.198,25.295,41.099,25,43,25c0.552,0,1,0.447,1,1 s-0.448,1-1,1c-1.872,0-3.746,0.321-5.571,0.953c-0.352,0.123-0.746,0.039-1.017-0.22c-2.583-2.457-5.39-2.771-6.631-2.773 c-0.782,3.235-0.435,5.959,0.017,7.718c0.077,0.301,0.01,0.621-0.181,0.865C27.25,36.566,26,40.183,26,44v2c0,7.72,6.28,14,14,14 h0.76c0.385,0,0.735,0.221,0.901,0.567c0.167,0.347,0.119,0.759-0.122,1.059c-0.88,1.098-1.404,2.417-1.515,3.816 c-0.021,0.271-0.153,0.522-0.363,0.694c-1.658,1.357-3.762,1.986-5.769,1.732c-2.331-0.138-4.38-1.54-5.282-3.654 c-1.028-2.057-3.379-4.437-6.539-4.218c1.881,0.514,3.562,1.938,4.435,3.754c0.215,0.412,0.389,0.876,0.558,1.324 c0.083,0.221,0.165,0.439,0.252,0.65c0.513,1.314,1.529,2.515,2.871,3.401c1.973,1.299,4.407,1.792,6.85,1.388 c0.476-0.047,1.028-0.185,1.626-0.399c0.305-0.109,0.646-0.063,0.913,0.124C39.842,70.426,40,70.731,40,71.057v10.77 c0,0.311-0.144,0.604-0.39,0.793s-0.567,0.254-0.866,0.174C22.997,78.613,12,64.307,12,48c0-19.851,16.149-36,36-36 s36,16.149,36,36c0,16.307-10.997,30.613-26.744,34.793C57.17,82.815,57.084,82.826,57,82.826z"
                    />
                    <g>
                      <path
                        fill="#0fd2ff"
                        d="M57,83.826c-1.104,0-2-0.896-2-2V66c0-1.376-0.457-2.672-1.32-3.748 c-0.481-0.601-0.576-1.424-0.243-2.117C53.77,59.441,54.47,59,55.24,59H56c7.168,0,13-5.832,13-13v-2 c0-3.463-1.106-6.771-3.198-9.565c-0.372-0.496-0.492-1.137-0.326-1.734c0.432-1.552,0.783-3.89,0.257-6.694 c-1.285,0.144-3.323,0.683-5.217,2.521c-0.549,0.534-1.354,0.708-2.075,0.445C56.664,28.327,54.833,28,53,28h-2.5 c-1.104,0-2-0.896-2-2s0.896-2,2-2H53c1.905,0,3.803,0.279,5.659,0.833c4.22-3.418,8.726-2.839,8.929-2.814 c0.784,0.109,1.431,0.671,1.648,1.432c1.083,3.793,0.837,7.067,0.33,9.375C71.815,36.145,73,39.987,73,44v2 c0,8.533-6.319,15.617-14.523,16.82C58.82,63.84,59,64.915,59,66v15.826C59,82.931,58.104,83.826,57,83.826z"
                        opacity=".3"
                      />
                      <path
                        fill="#0fd2ff"
                        d="M57,84.826c-1.657,0-3-1.343-3-3V66c0-1.146-0.38-2.226-1.1-3.123 c-0.722-0.899-0.864-2.135-0.365-3.175C53.034,58.662,54.086,58,55.24,58H56c6.617,0,12-5.383,12-12v-2 c0-3.245-1.037-6.346-2.999-8.966c-0.558-0.744-0.738-1.705-0.489-2.602c0.351-1.262,0.644-3.081,0.387-5.264 c-1.063,0.263-2.411,0.837-3.687,2.075c-0.825,0.8-2.033,1.06-3.113,0.668C56.432,29.307,54.716,29,53,29h-2.5 c-1.657,0-3-1.343-3-3s1.343-3,3-3H53c1.832,0,3.656,0.246,5.445,0.732c4.436-3.326,9.064-2.732,9.28-2.704 c1.177,0.163,2.146,1.006,2.473,2.147c1.075,3.763,0.903,7.044,0.432,9.444C72.839,36.022,74,39.928,74,44v2 c0,8.646-6.126,15.887-14.265,17.61C59.91,64.392,60,65.193,60,66v15.826C60,83.483,58.657,84.826,57,84.826z"
                        opacity=".3"
                      />
                      <path
                        fill="#0fd2ff"
                        d="M57,82.826c-0.552,0-1-0.447-1-1V66c0-1.605-0.533-3.118-1.54-4.374 c-0.241-0.3-0.288-0.712-0.122-1.059C54.504,60.221,54.855,60,55.24,60H56c7.72,0,14-6.28,14-14v-2 c0-3.681-1.175-7.195-3.397-10.164c-0.186-0.248-0.246-0.568-0.163-0.867c0.505-1.817,0.908-4.638,0.092-8.01 c-1.251,0.003-4.105,0.32-6.711,2.851c-0.275,0.266-0.679,0.353-1.038,0.223C56.895,27.347,54.95,27,53,27h-2.5 c-0.552,0-1-0.447-1-1s0.448-1,1-1H53c1.983,0,3.959,0.319,5.884,0.951c3.998-3.526,8.375-2.97,8.566-2.941 c0.393,0.054,0.715,0.335,0.824,0.716c1.096,3.836,0.758,7.107,0.216,9.305C70.788,36.264,72,40.045,72,44v2 c0,8.473-6.62,15.429-14.959,15.967C57.666,63.213,58,64.598,58,66v15.826C58,82.379,57.552,82.826,57,82.826z"
                      />
                    </g>
                  </svg>
                </a>
              </div>
              <div className="contacts-social__item">
                <a
                  href="https://vk.com/id453928390"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 96 96"
                    width="96px"
                    height="96px"
                    baseProfile="basic"
                  >
                    <path
                      fill="#0fd2ff"
                      d="M48,86.003c-18.563,0-37.577-13.037-38-37.954c0-0.034,0-0.068,0-0.102	C10.426,23.039,29.435,10.003,47.992,10c0.003,0,0.006,0,0.008,0c8.45,0,16.682,2.844,23.808,8.225	c1.012,0.764,1.403,2.044,1.084,3.195c1.112-0.441,2.426-0.189,3.294,0.733c6.247,6.642,9.641,15.562,9.814,25.795	c0,0.034,0,0.068,0,0.102C85.574,72.967,66.562,86.003,48,86.003z M16,47.999c0.398,21.987,16.861,32.004,32,32.004	c15.137,0,31.599-10.016,32-32.003c-0.158-8.695-2.988-16.21-8.186-21.736c-0.744-0.792-0.976-1.881-0.706-2.857	c-0.941,0.375-2.05,0.26-2.916-0.394C62.116,18.425,55.134,16,48,16c-0.003,0-0.004,0-0.006,0	C32.859,16.002,16.401,26.019,16,47.999z"
                      opacity=".3"
                    />
                    <path
                      fill="#0fd2ff"
                      d="M48,85.003c-18.075,0-36.589-12.699-37-36.971C11.414,23.701,29.924,11.003,47.993,11	c0.002,0,0.005,0,0.007,0c8.23,0,16.254,2.774,23.205,8.023c0.882,0.666,1.057,1.92,0.391,2.801c-0.664,0.88-1.92,1.058-2.801,0.391	C62.544,17.495,55.353,15,48,15c-0.003,0-0.004,0-0.007,0C32.374,15.002,15.387,25.341,15,48.033	c0.384,22.631,17.376,32.97,33,32.97c15.622,0,32.613-10.338,33-33.037c-0.152-8.901-3.076-16.666-8.457-22.387	c-0.757-0.805-0.718-2.07,0.087-2.827c0.803-0.755,2.069-0.718,2.827,0.087C81.53,29.296,84.83,37.985,85,47.966	C84.586,72.304,66.073,85.003,48,85.003z"
                      opacity=".3"
                    />
                    <path
                      fill="#0fd2ff"
                      d="M48,84.003c-17.587,0-35.6-12.361-36-35.987C12.403,24.363,30.412,12.003,47.993,12	c0.002,0,0.005,0,0.007,0c8.011,0,15.826,2.704,22.603,7.821c0.44,0.333,0.528,0.96,0.195,1.4c-0.333,0.441-0.96,0.527-1.4,0.195	C62.972,16.565,55.572,14,48,14c-0.003,0-0.004,0-0.007,0C31.39,14.003,14.381,25.688,14,48.016	c0.378,22.301,17.391,33.987,34,33.987c16.607,0,33.619-11.686,34-34.02c-0.156-9.188-3.175-17.184-8.729-23.089	c-0.378-0.402-0.359-1.035,0.043-1.414c0.401-0.377,1.034-0.359,1.414,0.043c5.9,6.273,9.106,14.731,9.271,24.459	C83.597,71.642,65.584,84.003,48,84.003z"
                    />
                    <path
                      fill="#0fd2ff"
                      d="M63.251,64.061c-4.124,0-5.578-1.077-9.099-6c-0.03-0.035-0.061-0.069-0.09-0.103	c-0.092,1.46-0.464,3.016-1.586,4.249c-0.708,0.778-2.001,1.72-4.143,1.789c-5.887,0.153-11.051-4.5-14.346-8.466	c-4.412-5.313-8.467-13.074-8.008-17.375c-0.034-0.979,0.288-1.917,0.922-2.646c1.544-1.771,4.125-1.619,6.199-1.499	c0.315,0.018,0.723,0.027,0.937,0.042C34.22,34.017,34.405,34,34.591,34c2.736,0,3.893,1.755,4.409,2.961	c0.021-1.616,1.323-2.933,2.95-2.96l2.151-0.042c5.005-0.105,7.074-0.149,8.7,1.539c1.463,1.518,1.35,3.454,1.22,5.696	c-0.013,0.229-0.027,0.466-0.041,0.714c0.178-0.344,0.35-0.679,0.516-1.004c1.849-3.612,3.446-6.732,6.953-6.899l0.478-0.028	c3.009-0.186,5.624-0.204,7.144,1.475c0.745,0.822,1.069,1.926,0.89,3.029c-0.474,2.93-4.29,9.032-5.738,11.264	c0.473,0.876,1.595,2.349,2.316,3.296c2.407,3.158,4.485,5.885,3.19,8.597c-0.404,0.848-1.486,2.282-4.183,2.36l-1.062,0.037	C64.048,64.051,63.638,64.061,63.251,64.061z M54.831,50.711c1.228,0.725,2.539,1.897,3.948,3.524	c0.062,0.071,0.12,0.145,0.174,0.222c1.142,1.602,2.284,3.133,2.904,3.489c0.163,0.094,0.472,0.128,0.962,0.13	c-0.367-0.501-0.747-1-1.051-1.399c-2.498-3.277-5.081-6.667-2.966-9.6c1.009-1.484,3.016-4.77,4.235-7.154	c-0.306,0.015-0.57,0.031-0.739,0.042l-0.321,0.019c-0.53,0.51-1.454,2.314-2.139,3.654c-0.736,1.438-1.571,3.069-2.645,4.834	C56.733,49.226,55.88,50.093,54.831,50.711z M32.063,39.962c0.62,2.565,3.267,8.25,7.651,13.004c3,3.253,5.932,5.035,8.278,5.035	c0.015,0,0.03,0,0.045,0c0.097-0.583,0.029-1.678-0.007-2.251c-0.03-0.496-0.057-0.957-0.057-1.355c0-2.017,0.82-3.135,1.598-3.741	c-0.872-0.708-1.435-1.805-1.582-3.156c-0.006-0.052-0.01-0.104-0.013-0.157c-0.159-2.855-0.036-4.959,0.053-6.495	c0.017-0.294,0.036-0.618,0.049-0.916c-0.526-0.02-1.211-0.019-1.973-0.008c0.486,0.479,0.813,1.125,0.881,1.857	c0.271,2.896,0.904,9.676-3.573,10.575c-3.604,0.715-6.851-3.421-9.69-12.309c-0.305-0.008-0.627-0.027-0.973-0.047	C32.56,39.988,32.317,39.974,32.063,39.962z M63.744,50.474c-0.045,0.068-0.071,0.106-0.075,0.111	C63.696,50.548,63.721,50.511,63.744,50.474z M39.653,38.869c0.466,1.391,0.931,2.583,1.371,3.586	c-0.004-0.039-0.007-0.077-0.011-0.116c-0.084-0.896,0.235-1.737,0.81-2.343C40.946,39.945,40.168,39.517,39.653,38.869z M61.75,39.997l-0.015,0.001C61.741,39.997,61.746,39.997,61.75,39.997z M33.761,34.117c-0.001,0-0.001,0-0.002,0	C33.76,34.118,33.76,34.117,33.761,34.117z"
                      opacity=".3"
                    />
                    <path
                      fill="#0fd2ff"
                      d="M63.099,63.065c-3.465,0-4.735-0.832-8.161-5.626c-0.764-0.876-1.408-1.48-1.909-1.885	c0.113,1.839,0.232,4.304-1.292,5.979c-0.578,0.635-1.643,1.404-3.435,1.462c-5.486,0.193-10.393-4.31-13.544-8.105	c-4.221-5.083-8.279-12.764-7.776-16.703c-0.046-0.756,0.187-1.462,0.675-2.022c1.221-1.401,3.434-1.271,5.387-1.157	c0.385,0.022,0.901,0.055,1.108,0.041C34.295,35.017,34.443,35,34.591,35c2.757,0,3.458,2.165,3.758,3.089	c1.393,4.459,2.803,7.141,3.743,8.452c0.085-0.843,0.113-2.193-0.083-4.295c-0.103-1.1,0.706-2.075,1.805-2.177	c1.089-0.106,2.074,0.705,2.177,1.805c0.382,4.087,0.412,8.861-2.774,9.501c-4.011,0.805-7.163-7.217-8.68-12.073	c-0.035-0.107-0.065-0.194-0.092-0.264c-0.461,0.032-0.991,0.001-1.636-0.037c-0.469-0.027-1.296-0.076-1.884-0.048	c-0.02,1.881,2.397,7.948,6.91,13.382c3.648,4.395,7.322,6.762,10.337,6.663c0.144-0.004,0.49-0.029,0.606-0.157	c0.418-0.459,0.31-2.212,0.251-3.154c-0.029-0.473-0.055-0.913-0.055-1.293c0-2.299,1.229-3.1,1.962-3.374	c1.875-0.699,4.259,0.604,7.085,3.869c0.041,0.047,0.08,0.097,0.116,0.148c2.94,4.123,2.941,4.119,6.156,4	c0.124-0.005,0.251-0.01,0.381-0.015c-0.547-0.897-1.479-2.119-2.113-2.952c-2.382-3.125-4.631-6.077-2.951-8.409	c0.96-1.403,3.908-6.162,5.01-8.763c-0.583-0.017-1.38,0.005-2.386,0.067l-0.548,0.032c-0.615,0.029-1.844,2.431-2.741,4.184	c-0.729,1.423-1.554,3.036-2.609,4.77c-0.673,1.106-2.812,2.973-4.923,2.504c-0.504-0.113-2.17-0.666-2.43-3.066	c-0.004-0.035-0.007-0.07-0.009-0.105c-0.155-2.798-0.035-4.869,0.053-6.381c0.041-0.692,0.085-1.457,0.062-1.889	c-0.801-0.143-2.791-0.101-4.884-0.057L42.034,39c-0.012,0-0.023,0-0.034,0c-1.089,0-1.981-0.874-1.999-1.966	c-0.019-1.104,0.861-2.015,1.966-2.033l2.155-0.042c4.693-0.098,6.635-0.14,7.959,1.233c1.159,1.203,1.067,2.772,0.941,4.944	c-0.069,1.188-0.16,2.747-0.103,4.737c0.001-0.002,0.003-0.005,0.005-0.007c0.975-1.603,1.765-3.146,2.461-4.507	c1.778-3.473,3.182-6.217,6.111-6.356l0.492-0.029c2.748-0.169,5.12-0.2,6.341,1.148c0.547,0.604,0.776,1.385,0.644,2.198	c-0.479,2.959-4.838,9.741-5.889,11.339c0.285,0.871,1.754,2.799,2.66,3.987c2.299,3.016,4.114,5.399,3.083,7.56	c-0.374,0.784-1.252,1.732-3.31,1.791l-1.071,0.038C63.961,63.054,63.514,63.065,63.099,63.065z M52.992,54.143L52.992,54.143	L52.992,54.143z M62.893,49.948c-0.021,0.031-0.033,0.049-0.036,0.053C62.87,49.983,62.882,49.966,62.893,49.948z M41.817,47.813	L41.817,47.813L41.817,47.813z M52.984,47.096L52.984,47.096L52.984,47.096z M34.105,35.06c-0.025,0.006-0.048,0.012-0.069,0.019	C34.059,35.072,34.082,35.066,34.105,35.06z"
                      opacity=".3"
                    />
                    <path
                      fill="#0fd2ff"
                      d="M63.045,62.068c-3.141,0-4.112-0.749-7.349-5.288c-1.862-2.145-3.218-2.891-3.656-2.941	c-0.028,0.082-0.066,0.25-0.066,0.556c0,0.325,0.024,0.703,0.049,1.108c0.109,1.765,0.245,3.961-1.027,5.358	c-0.651,0.716-1.569,1.098-2.728,1.136c-5.069,0.147-9.733-4.121-12.742-7.745c-4.649-5.6-8.042-12.846-7.54-16.035	c-0.052-0.528,0.095-1.017,0.423-1.394c0.899-1.031,2.851-0.916,4.574-0.816c0.488,0.029,1.157,0.068,1.343,0.03	C34.394,36.022,34.523,36,34.591,36c1.873,0,2.431,1.237,2.807,2.397c2.344,7.502,4.667,9.975,5.254,10.033	c-0.025-0.023,0.852-0.932,0.353-6.277c-0.051-0.55,0.353-1.038,0.902-1.089c0.556-0.048,1.038,0.354,1.089,0.902	c0.502,5.378-0.125,8.056-1.976,8.428c-3.467,0.692-6.639-8.542-7.528-11.39C35.195,38.087,35.058,38.008,34.7,38	c-0.417,0.079-0.969,0.053-1.832,0.002c-0.728-0.042-2.371-0.139-2.878,0.096c0.013,0.117,0.01,0.249-0.013,0.354	c-0.473,2.142,2.584,9.097,7.089,14.521c3.85,4.637,7.792,7.149,11.139,7.023c0.606-0.02,1.036-0.178,1.313-0.483	c0.702-0.772,0.591-2.573,0.51-3.889c-0.028-0.45-0.053-0.87-0.053-1.231c0-1.61,0.713-2.213,1.312-2.437	c1.797-0.668,4.245,1.581,5.98,3.587c3.311,4.635,3.525,4.629,7.066,4.492c0.339-0.013,0.704-0.027,1.099-0.038	c0.57-0.017,0.722-0.132,0.724-0.133c0.098-0.602-1.714-2.98-2.797-4.401c-2.244-2.945-4.182-5.488-2.935-7.218	c0.476-0.686,4.922-7.603,5.542-10.176c-0.507-0.192-1.779-0.226-3.792-0.103L61.64,38c-1.193,0.057-2.248,2.118-3.583,4.727	c-0.721,1.408-1.538,3.003-2.573,4.706c-0.56,0.918-2.326,2.385-3.852,2.047c-0.542-0.121-1.477-0.567-1.653-2.198	c-0.157-2.794-0.038-4.832,0.048-6.32c0.076-1.305,0.141-2.431-0.106-2.688c-0.412-0.427-2.645-0.379-5.735-0.315l-2.168,0.042	c-0.005,0-0.011,0-0.017,0c-0.544,0-0.99-0.437-1-0.983c-0.009-0.552,0.431-1.007,0.983-1.017l2.16-0.042	c4.512-0.094,6.198-0.13,7.217,0.927c0.855,0.887,0.783,2.131,0.663,4.192c-0.084,1.44-0.198,3.412-0.052,6.04	c0.036,0.321,0.128,0.428,0.129,0.429c0.271,0.057,1.333-0.594,1.674-1.155c0.998-1.64,1.796-3.2,2.501-4.577	c1.694-3.31,2.918-5.701,5.268-5.813l0.506-0.029c2.392-0.146,4.616-0.197,5.538,0.821c0.339,0.374,0.48,0.859,0.398,1.367	c-0.492,3.038-5.887,11.182-5.94,11.256c-0.276,0.665,1.871,3.482,2.903,4.836c2.092,2.745,3.744,4.914,2.976,6.523	c-0.37,0.775-1.189,1.186-2.436,1.222l-1.08,0.038C63.91,62.055,63.458,62.068,63.045,62.068z M52.068,53.773L52.068,53.773	L52.068,53.773z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacts;
