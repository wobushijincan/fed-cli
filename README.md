
# FEDCLI
In our team, a cli that how to generate projects in an easy way.

# Installation

or
```
git clone https://github.com/wobushijincan/fed-cli.git

cd fed-cli && npm install

npm link
```

# Usage
Open your terminal and type `vk`, you'll see the help infomation below:
```
  Usage: vk <command>

  Options:

    -h, --help     output usage information
    -V, --version  output the version number

  Commands:

    add|a           Add a new template
    list|l          List all the templates
    init|i          Generate a new project
    delete|d        Delete a template
    deleteAll|dall  Delete All templates

```

# Commands
### add | a
This command would help you to add a new template to the `templates.json`, which will be used by `Cli` to generate projects.
```
$ vk add

```
`Cli` use [download-git-repo](https://github.com/flipxfx/download-git-repo) to down load git repos. After answering 3 questions, you'll add a new template to `Cli`.

### list | l
It shows you the templates list.
```
$ vk list
```

### init | i
After adding new templates, you could use this command to generate your own project by choosing template.
```
$ vk init
```

It's easy, right?

### delete | d
To delete a template, you could use this command:
```
$ vk delete
```

# Template
The most important part of Cli is `template`. All templates' infomation were list in the `templates.json`.
A template means a project sample, which has a simple or complex file structure.

You can create your own templates repository, and push your templates in different branches. All you need to do then is to add the templates into Cli's `templates.json`.

# License
MIT.



