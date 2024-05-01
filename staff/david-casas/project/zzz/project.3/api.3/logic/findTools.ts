import { Tool, ToolType } from "../data"

function findTools(
    userId: string,
    criteria: { category?: string }
): Promise<ToolType[]> {
    
    const filteredTools = Tool.filter((tool) => {
        if (criteria.category) {
            return tool.category === criteria.category
        }
        return true
    })
    //TODO 

    return Promise.resolve(filteredTools)
}

export default findTools