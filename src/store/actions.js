//暴露给用户使用，借此触发mutations中的方法，保存数据（可执行异步操作）

const actions={
    actionSaveToken(context)
    {
        context.commit("SaveToken")
    }

}

export default actions

