/* Допустим, мы хотим из дочернего компонента что-то передать в родительский, изменить родительский useState.
Тогда мы:

1) В родительском компоненте создаем метод:
    const handleDelete = (id) => {
        setCounters(counters.filter(i => (i.id != id)))
    }

2) Передаем его как аргумент компонента (вместе с другими пропсами):
    <Counter id={count.id} onDelete={handleDelete}/>

3) В дочернем компоненте вешаем событие на него: onClick={() => props.onDelete(props.id)}
На onClick это будет как callback
    <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => props.onDelete(props.id)}
    >Delete
    </button>
 */
