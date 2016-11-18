PORT = 8080

help: ## Показать справку
		@cat README.md; \
		echo "\n\
		Usage: make [options] [target] ...\n\
		Targets:"; \
		fgrep -h '##' Makefile | awk -F'##|:' '{printf "%40s %s\n", $$1, $$3}' | fgrep -v 'fgrep'

dep: ## Подтянуть все зависимости
	@sh -c "trap exit TERM;npm install"

gulp\:%:
	@node node_modules/babel-cli/bin/babel-node node_modules/gulp/bin/gulp $(subst gulp:,,$@)

compile: ## (Пере)Компиляция исходного кода
	@make gulp\:default

build: dep compile ## Последовательное выполнение необходимых для запуска задач

run:
	@sh -c "trap exit TERM;python -m SimpleHTTPServer $(PORT) build/"

.PONY: help compile build run
