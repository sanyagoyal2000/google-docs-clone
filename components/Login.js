import Button from "@material-tailwind/react/Button";
import { signIn } from "next-auth/client";
function Login() {
    return (
        <div className="flex flex-col items-center justify-center">
            <img
            src='https://lh3.googleusercontent.com/xYxo5D3dD9aAFLJayvxFUmWZgWHWWkY-RdpXPZHOn3Kw_i6R9dDv7BtIufqzGA2_hjzl1wewl0m3xt4HYaUtm2G7Gyz1Eb3lGVPwE1PfwAyd2X6muYHP4h-1CDK_sJS7QwAClFD4UgU4o_njKKHJjS8Ks6EnIwcJEQrlg9sWfpcB07X80QwNm01z0s0tUoFep4X1U8iri8jAc4Vq8mYxPD2Sn7Nh7HFynBXz9ECz-x6PqewA_FoZpiri9BM-0i7iN_zGC_EHxL0j98tpMA2lEo_aukdvvwhfaqxsEKHTgOtmS1bFO1pXlUvfgFlGgAX70Ys8j5bf1yXAKJCVejo_6HC6yLVVHzf9yV8zDyvp7gVmjPRm5cFmhoJTeZsyG7tdkgHKMes1leWwYOkaSQ49NaW78t3_Lc57o3PnCcX-xnMMCRubHQaHcPzLSd4AoJ6jJJTctjKu7xjHaLqpq_ztz84jiKuOEzJW4fFQs3BZfw_dUV7YuK4_91sRK2o-TClaBskiy19xsGG5Xh2K3VhxNDJ_0a53-HHNvkaFiPc7cyLN5Yj_ZgZNCGkq23lUs8rqoSXppRIjeHgUCPpsTqdapbUDv51A695JVhjor6-EsEFAhxLUFyhNGm8RVhblPI-3vpOKgWK9EcOXPYcgOOnjGSiK3SL5SZU28qG8GA_21f_GIc9p9pT1i7RqeZZKeaIp1mBIoJ3ErIxDnrJ6-hd9Nlk=w800-h420-no?authuser=0' 
            objectFit="contain"
            height="300"
            width="400"
            className="mt-10 pt-20"
            />
            <Button
            onClick={signIn}
            className="w-44 mt-10"
            color="blue"
            buttonType="filled"
            ripple="light"
            >
                Login
            </Button>

        </div>
    )
}

export default Login;
