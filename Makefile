PLAYWRIGHT_TAG=gianiaz:playwright

shell:
	@docker-compose run --rm playwright bash

bold := "\\033[1m"
normal := "\\033[0m"
boldunderline := "\\033[1m\\033[4m"
titlebg := "\\e[41m\\e[97m"


.SILENT:
