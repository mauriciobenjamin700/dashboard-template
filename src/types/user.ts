declare global {
    type User = {
        id: number;
        email: string;
        name: string;
        last_name: string;
        date_of_birth: string;
        age: number;
        gender: string;
        phone: string;
        plan: string;
        location: string;
        interaction_pattern: string;
        tips_received: number;
        feedbacks_given: number;
        love_languages: string[];
        temperaments: string[];
        psychiatric_diagnoses: string[];
        personalities: string[];
        engagement_score: number;
        last_active: string;
        has_bible_verses: boolean;
        is_admin: boolean;
        is_active: boolean;
        created_at: string;
        updated_at: string;
    }
}

export default {};