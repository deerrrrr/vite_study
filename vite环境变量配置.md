在vite中的环境变量处理:dotenv
dotenv会自动读取.env文件，并解析这个文件中对应的环境变量，并将其注入到process对象下（但是vite考虑到和其他配置的一些冲突问题，不会直接放入process对象下）

涉及到vite.config.js中的一些配置
-root
-envDir:用来配置当前环境变量的文件地址
vite提供了一些补偿措施:手动调用vite的loadEnv来手动确认env文件

使用loadEnv时，会做以下的事情：
1直接找到.env文件解析其中的环境变量
2将传入的mode进行拼接，例如```.env.development```,根据我们提供的目录取对应配置文件并进行解析

.env 所有环境都需要用的环境变量
