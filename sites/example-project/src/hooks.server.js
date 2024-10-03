import { isDebug } from '@evidence-dev/sdk/utils';
import { dev } from '$app/environment';

/** @param {Error | unknown} e  */
const transformError = (e) => {
	if (!(e instanceof Error)) {
		console.log(`Page threw a non-error`, { error: e });
		return JSON.parse(JSON.stringify(e));
	} else {
		return {
			message: e.message,
			stack: e.stack,
			name: e.name,
			cause: e.cause ? transformError(e.cause) : undefined
		};
	}
};

/** @type {import("@sveltejs/kit").HandleClientError } */
export const handleError = (e) => {
	if (isDebug()) {
		console.error(`Uncaught error while server responding`, e);
	}
	return transformError(e.error);
};

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	const loading = dev
		? `
	setTimeout(() => {
		const splash = document.getElementById('__evidence_project_splash');
		if (splash) {
			splash.style.visibility = 'visible';
		}
	}, 250);`
		: '';

	const response = await resolve(event, { transformPageChunk: ({ html }) => html.replace('/*loading*/', loading) });
	// Set the COOP and COEP headers
	response.headers.set('Cross-Origin-Embedder-Policy', 'require-corp');
	response.headers.set('Cross-Origin-Opener-Policy', 'same-origin');
   
	return response;
}
