import { Content } from "../../components";
import { TextField } from "../../components/TextField";
import { Button } from "../../components/Button";
import { TextAreaField } from "../../components/TextAreaField";
import { useRegistrationForm } from "./useRegistrationForm";

export const RegistrationPage = () => {

  const { submit, getFieldProps, getTextFieldProps, reset } = useRegistrationForm();

  return (
    <Content title="Rejestracja" >
      <form onSubmit={submit} onReset={reset} noValidate>
        <div className="max-w-[620px] pb-10 ml-40 mt-[72px]">
          <h1 className="uppercase text-5xl font-bold">Rejestracja</h1>
          <div className="mt-7 grid grid-rows-3 grid-cols-2 gap-x-4 gap-y-6">
            <TextField
              label="Imie"
              required
              {...getTextFieldProps("firstName")}
              inputProps={{
                ...getFieldProps("firstName"),
              }}
            />
            <TextField
              label="Nazwisko"
              required
              {...getTextFieldProps("lastName")}
              inputProps={{
                ...getFieldProps("lastName"),
              }}
            />
            <TextField
              label="Email"
              required
              {...getTextFieldProps("firstName")}
              inputProps={{ ...getFieldProps("email"), type: "email" }}
            />
            <TextField
              label="Telefon"
              required
              {...getTextFieldProps("phone")}
              inputProps={{ ...getFieldProps("phone"), type: "tel" }}
            />
            <TextField
              label="Hasło"
              required
              {...getTextFieldProps("password")}
              inputProps={{ ...getFieldProps("password"), type: "password" }}
            />
            <TextField
              label="Powtórz hasło"
              required
              {...getTextFieldProps("repeatPassword")}
              inputProps={{
                ...getFieldProps("repeatPassword"),
                type: "password",
              }}
            />
          </div>
          <h3 className="my-9 uppercase">Adres i informacje o gospodarstwie</h3>
          <TextField
            className="mb-8"
            label="Nazwa gospodarstwa"
            required
            {...getTextFieldProps("farmName")}
            inputProps={{ ...getFieldProps("farmName") }}
          />
          <TextAreaField
            label="Opis gospodarstwa"
            {...getTextFieldProps("farmDesc")}
            textAreaProps={{ rows: 4, ...getFieldProps("farmDesc") }}
          />
          <div className="mt-7 grid grid-rows-1 grid-cols-2 gap-x-4 gap-y-6">
            <TextField
              label="Ulica"
              required
              {...getTextFieldProps("street")}
              inputProps={{ ...getFieldProps("street") }}
            />
            <div className="grid grid-rows-1 grid-cols-2 gap-x-4">
              <TextField
                label="Numer domu"
                required
                {...getTextFieldProps("streetNumber")}
                inputProps={{ ...getFieldProps("streetNumber") }}
              />
              <TextField
                label="Numer mieszkania"
                {...getTextFieldProps("flatNumber")}
                inputProps={{ ...getFieldProps("flatNumber") }}
              />
            </div>
            <TextField
              label="Miast/Wieś"
              required
              {...getTextFieldProps("city")}
              inputProps={{ ...getFieldProps("city") }}
            />
            <TextField
              label="Kod pocztowy"
              required
              {...getTextFieldProps("postCode")}
              inputProps={{ ...getFieldProps("postCode") }}
            />
            <TextField
              label="Wojewóctwo"
              required
              {...getTextFieldProps("voivodeship")}
              inputProps={{ ...getFieldProps("voivodeship") }}
            />
            <TextField
              label="Powiat"
              required
              {...getTextFieldProps("country")}
              inputProps={{ ...getFieldProps("country") }}
            />
            <TextField
              label="Gmina"
              required
              {...getTextFieldProps("county")}
              inputProps={{ ...getFieldProps("county") }}
            />
          </div>
          <div className="flex flex-row justify-end my-12">
            <Button variant="text" className="w-[99px] h-[42px] font-semibold" type="reset">
              Reset
            </Button>
            <Button type="submit" className="w-[99px] h-[42px] font-semibold" >Zapisz</Button>
          </div>
        </div>
      </form>
    </Content>
  );
};