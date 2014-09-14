serve:
	broccoli serve
open:
	open http://localhost:4200/ # Mac
#	 xdg-open http://localhost:4200/ # Linux
build:
	rm -rf ./dist
	broccoli build dist