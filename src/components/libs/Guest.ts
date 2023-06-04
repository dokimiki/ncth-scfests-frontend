type guest = {
    id: string;
    name: string;
    type: "student" | "guest" | "teacher" | "vip";
    grade?: string;
    class?: string;
    studentNumber?: string;
};

export type GuestInfo = guest & {
    invitedBy?: guest;
};

export function GetGuestInfo(guestId: string): GuestInfo | undefined {
    let guestInfo: GuestInfo = {
        id: guestId,
        name: "",
        type: "vip",
    };
    // TODO: get guest info from database

    guestInfo = {
        id: guestId,
        name: "Lorem Ipsum",
        type: "guest",
        invitedBy: {
            id: "R5.1140009",
            name: "Lorem Ipsum2",
            type: "student",
            grade: "3",
            class: "I",
            studentNumber: "9",
        },
    };

    if (!guestId) {
        return undefined;
    }

    return guestInfo;
}

export function GuestTypeToJapanese(type: guest["type"]): string {
    switch (type) {
        case "student":
            return "生徒";
        case "guest":
            return "招待客";
        case "teacher":
            return "教師";
        case "vip":
            return "VIP";
    }
    return "不明";
}
