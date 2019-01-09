# dynamic-assignment
n级对象动态赋值

# how to use
## step 1
- npm install -g cnpm --registry=https://registry.npm.taobao.org
- cnpm install dynamic-assignment --save
- 或者使用 yarn add dynamic-assignment

## step 2
最好在全局引用
import dynamicAssignment from 'dynamic-assignment';

- use

<pre>
var arr = ['a', 'b', 'c'];
var obj = { 
    a: { 
        b: {
            c: 1 
        }, 
        n: 'ha' 
    }, 
    d: [], 
    e: 'la' 
};

<h4>适用情况</h4>
当需要对obj的子集c赋值的时候，
我们一般直接obj.a.b.c = 'val';

当我们需要动态处理一些赋值时，
这种方法就太麻烦了，如arr代表对象的层级关系。
在不知道里面内容的情况下，你是不是会根据arr的长度来赋值，
像这样：obj[arr[0]][arr[1]][arr[2]] = 'val';

显然，每次arr长度不一样的时候，这样处理还是会很麻烦，
这时候只需要做个简单的递归就可以解决问题了。
代码很简单，有兴趣可以自行查看。

<h4>示例</h4>
dynamicAssignment(obj, arr, 3);
console.log('obj', obj);
{ 
    a: { 
        b: {
            c: 3
        }, 
        n: 'ha' 
    }, 
    d: [], 
    e: 'la' 
}
dynamicAssignment(obj, ['a', 'n'], 'new');
{ 
    a: { 
        b: {
            c: 3
        }, 
        n: 'new'
    }, 
    d: [], 
    e: 'la' 
}

解决重复劳动力是一件很有意义的事情，
有什么好的想法，欢迎一起成长交流
WeChat：mrliaojun
</pre>

### github
[Jared](https://github.com/aisriver/dynamic-assignment.git)