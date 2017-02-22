export function isTokenValid(name) {
	if(typeof localStorage === "undefined") {
		return false
	}
	const token = localStorage.getItem(`${name}token`)
	const time = localStorage.getItem(`${name}expiration`)
	return token && new Date() < new Date(time)
}

export function getToken(name) {
	return isTokenValid(name) ? localStorage.getItem(`${name}token`) : ''
}

export function setToken(name, token) {
	localStorage.setItem(`${name}token`, token)
	let expiration = new Date(new Date().getTime() + 3 * 24 * 60 * 60000/* 3 days*/)
	localStorage.setItem(`${name}expiration`, expiration.toISOString())
}

export function removeToken() {
	localStorage.removeItem(`${name}token`)
	localStorage.removeItem(`${name}expiration`)
}