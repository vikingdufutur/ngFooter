angular.module("config", [])

.constant("ENV", {
	"name": "dev",
	"api": {
		"URL": "http://localhost:1337/",
		"USER_URL": "http://localhost:1337/user/",
		"AVAILABILITY_URL": "http://localhost:1337/availability/",
		"EVENT_URL": "http://localhost:1337/event/"
	}
})

;