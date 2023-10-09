import { AuthTokenError } from '@/services/errors/AuthTokenError';
import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from 'next'

import { parseCookies, destroyCookie } from 'nookies'

export default function canSSRAuth<P>(fn: GetServerSideProps<P>) {
    return async (context: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
        const cookies = parseCookies(context);
        const token = cookies['@bfood.token'];

        if(!token) {
            return {
                redirect: {
                    destination: '/login',
                    permanent: false
                }
            }
        }

        try {
            return await fn(context)
        } catch(error) {
            if(error instanceof AuthTokenError){
                destroyCookie(context, '@bfood.token')

                return {
                    redirect: {
                        destination: '/login',
                        permanent: false
                    }
                }
            }
        }
    }
}
