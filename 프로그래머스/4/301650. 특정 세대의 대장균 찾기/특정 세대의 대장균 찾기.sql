SELECT
    ID
FROM
    ECOLI_DATA
WHERE
    PARENT_ID IN ( -- 3세대 개체의 부모 ID (2세대) 찾기
        SELECT
            ID
        FROM
            ECOLI_DATA
        WHERE
            PARENT_ID IN ( -- 2세대 개체의 부모 ID (1세대) 찾기
                SELECT
                    ID
                FROM
                    ECOLI_DATA
                WHERE
                    PARENT_ID IS NULL -- 1세대 개체 (부모 ID가 NULL) 찾기
            )
    )
ORDER BY
    ID;