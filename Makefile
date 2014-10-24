all: clean install build

clean:
	rm -Rf node_modules
install:
	npm install

build:
	./node_modules/.bin/stylus -u nib -c nio.styl

watch:
	./node_modules/.bin/stylus -u nib -c -w nio.styl
