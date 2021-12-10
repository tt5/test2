SRC := $(wildcard ./markdown/*.m4d)
HTML    := $(SRC:.m4d=.html)

.PHONY: all

all: $(HTML)

$(HTML): %.html: %.m4d
	awk -f ./gawkt.awk $^ | m4 -R def.m4f | npx marked -o html/markdown/$(notdir $@)
	cat helper/header html/markdown/$(notdir $@) helper/footer > html/markdown/$(basename $(notdir $@))-C.html
	touch $@

