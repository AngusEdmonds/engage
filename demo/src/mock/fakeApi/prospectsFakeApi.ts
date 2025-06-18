const prospectsFakeApi = (server: any, apiPrefix: string) => {
    server.post(`${apiPrefix}/prospects/list`, (_schema, request) => {
        return {
            data: prospectsData,
            total: prospectsData.length,
        }
    })

    server.get(`${apiPrefix}/prospects/statistics`, () => {
        return {
            totalProspects: { value: prospectsData.length, growShrink: 5 },
            activeProspects: {
                value: prospectsData.filter((p) => p.status === 'active').length,
                growShrink: 10,
            },
            newProspects: { value: 1, growShrink: 15 },
        }
    })

    server.put(`${apiPrefix}/prospects/update`, (_schema, request) => {
        // Optionally handle update logic here, e.g. updating prospectsData mock.
        return { success: true }
    })
}

export default prospectsFakeApi
